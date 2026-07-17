import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useApp } from "../../context/AppContext";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import EmptyState from "../../components/ui/EmptyState";
import { formatDateRelative } from "../../utils/helpers";

const supportUser = { id: "support", firstName: "JobNepal", lastName: "Support", role: "support" };

export default function Messages() {
  const { user } = useAuth();
  const { conversations, messages, sendMessage, createConversation, markMessageRead } = useApp();
  const [activeConvId, setActiveConvId] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const userConvs = conversations.filter((c) =>
    c.participants?.includes(user?.id) || c.participants?.includes("support")
  );

  useEffect(() => {
    if (userConvs.length > 0 && !activeConvId) {
      setActiveConvId(userConvs[0].id);
    }
  }, [userConvs, activeConvId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeConvId, messages]);

  const activeConv = conversations.find((c) => c.id === activeConvId);
  const convMessages = messages.filter((m) => m.conversationId === activeConvId);

  const getOtherParticipant = (conv) => {
    const otherId = conv.participants?.find((p) => p !== user?.id);
    if (otherId === "support") return supportUser;
    return { id: otherId, firstName: otherId === user?.id ? "You" : "User", lastName: "" };
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    let convId = activeConvId;
    if (!convId) {
      const conv = createConversation([user?.id, "support"], "JobNepal Support");
      convId = conv.id;
      setActiveConvId(conv.id);
    }

    sendMessage(user?.id, "support", convId, newMessage.trim());
    setNewMessage("");
  };

  const handleStartConversation = () => {
    const conv = createConversation([user?.id, "support"], "JobNepal Support");
    setActiveConvId(conv.id);
  };

  const unreadCount = messages.filter((m) => m.receiverId === user?.id && !m.isRead).length;

  return (
    <div className="space-y-4 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <p className="text-sm text-gray-500 mt-1">Communicate with employers and support</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[500px]">
        <div className="lg:col-span-1">
          <Card padding={false}>
            <div className="p-3 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">Conversations</h3>
              <Button size="sm" variant="ghost" onClick={handleStartConversation}>+ New</Button>
            </div>
            <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
              {userConvs.length > 0 ? (
                userConvs.map((conv) => {
                  const other = getOtherParticipant(conv);
                  const isActive = conv.id === activeConvId;
                  return (
                    <button
                      key={conv.id}
                      onClick={() => setActiveConvId(conv.id)}
                      className={`w-full text-left p-3 hover:bg-gray-50 transition-colors cursor-pointer ${isActive ? "bg-blue-50" : ""}`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0261a6] rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
                          {other.firstName?.[0]}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{other.firstName} {other.lastName}</p>
                          <p className="text-xs text-gray-400 truncate">{conv.lastMessage || "No messages yet"}</p>
                        </div>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="p-6 text-center">
                  <p className="text-sm text-gray-400">No conversations</p>
                  <Button size="sm" variant="outline" className="mt-2" onClick={handleStartConversation}>Start New</Button>
                </div>
              )}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card padding={false}>
            {activeConv ? (
              <>
                <div className="p-3 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0261a6] rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {getOtherParticipant(activeConv).firstName?.[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {getOtherParticipant(activeConv).firstName} {getOtherParticipant(activeConv).lastName}
                    </p>
                    <p className="text-xs text-gray-400">{activeConv.subject}</p>
                  </div>
                </div>

                <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto" style={{ minHeight: "300px" }}>
                  {convMessages.length > 0 ? (
                    convMessages.map((msg) => {
                      const isMine = msg.senderId === user?.id;
                      return (
                        <div key={msg.id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
                              isMine
                                ? "bg-[#0261a6] text-white rounded-br-none"
                                : "bg-gray-100 text-gray-900 rounded-bl-none"
                            }`}
                          >
                            <p>{msg.body}</p>
                            <p className={`text-[10px] mt-1 ${isMine ? "text-blue-200" : "text-gray-400"}`}>
                              {formatDateRelative(msg.createdAt)}
                              {isMine && msg.isRead && " • Read"}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-sm text-gray-400">No messages yet. Send a message to get started.</p>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSend} className="p-3 border-t border-gray-100 flex gap-2">
                  <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0261a6]"
                  />
                  <button
                    type="submit"
                    disabled={!newMessage.trim()}
                    className="bg-[#0261a6] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#015c9e] transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    Send
                  </button>
                </form>
              </>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[400px]">
                <EmptyState icon="💬" title="Select a conversation" description="Choose a conversation from the left or start a new one." />
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
