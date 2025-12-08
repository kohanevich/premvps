import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIChat({ isOpen, onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi, I'm the PremVPS AI Assistant. I can help you choose the perfect VPS plan. Tell me a bit about what you need to host or any requirements you have.",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const analyzeUserNeeds = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Check for specific use cases
    if (input.includes('wordpress') || input.includes('blog')) {
      return "For a WordPress blog, I recommend our **VPS Basic plan** (2 vCPU, 4 GB RAM, 50 GB NVMe) at €7/month. This provides smooth performance for WordPress with room for plugins and moderate traffic (up to ~10,000 monthly visitors). If you expect higher traffic, the VPS Standard would be even better.";
    }
    
    if (input.includes('ecommerce') || input.includes('e-commerce') || input.includes('magento') || input.includes('shop') || input.includes('store')) {
      return "For an e-commerce site, I recommend our **VPS Standard plan** (3 vCPU, 8 GB RAM, 100 GB NVMe) at €12/month. The 8 GB RAM ensures smooth database and application performance for platforms like Magento or WooCommerce, and 3 CPU cores handle concurrent users without slowdown. This supports ~5,000-10,000 monthly visitors comfortably.";
    }
    
    if (input.includes('game') || input.includes('minecraft') || input.includes('gaming')) {
      return "For a game server, I recommend our **VPS Pro plan** (4 vCPU, 16 GB RAM, 200 GB NVMe) at €20/month. Game servers need good CPU performance and RAM. This plan can handle 30-50 concurrent players for most games. For larger communities (50+ players), consider the VPS Power plan.";
    }
    
    if (input.includes('database') || input.includes('mysql') || input.includes('postgres')) {
      return "For a database server, I recommend our **VPS Pro plan** (4 vCPU, 16 GB RAM, 200 GB NVMe) at €20/month. Databases benefit from extra RAM for caching and fast NVMe storage for query performance. This handles medium to large databases well. For enterprise databases, the VPS Enterprise would be ideal.";
    }
    
    if (input.includes('windows') || input.includes('rdp') || input.includes('remote desktop')) {
      return "For Windows Server or RDP usage, I recommend our **VPS Enterprise plan** (8 vCPU, 64 GB RAM, 800 GB NVMe) at €60/month. Windows environments need extra resources. This plan provides smooth performance for Windows-based applications, .NET/SQL Server, or multiple RDP users. Note: You'll need to bring your own Windows license.";
    }
    
    if (input.includes('small') || input.includes('test') || input.includes('learning') || input.includes('dev')) {
      return "For development, testing, or small projects, our **VPS Small plan** (1 vCPU, 2 GB RAM, 25 GB NVMe) at €4/month is perfect. It's ideal for lightweight websites, test environments, or learning. You can always upgrade as your needs grow!";
    }
    
    if (input.includes('agency') || input.includes('multiple sites') || input.includes('many websites')) {
      return "For hosting multiple client sites, I recommend our **VPS Power plan** (6 vCPU, 32 GB RAM, 400 GB NVMe) at €34/month. This provides enough resources to run several websites efficiently with isolated environments. You get full control to manage multiple projects, and can install control panels like cPanel or Plesk for easier management.";
    }
    
    if (input.includes('budget') || input.includes('cheap') || input.includes('affordable') || input.includes('low cost')) {
      return "For budget-conscious projects, our **VPS Small plan** starts at just €4/month (1 vCPU, 2 GB RAM, 25 GB NVMe). If you need more power but want to stay affordable, the **VPS Basic** at €7/month (2 vCPU, 4 GB RAM) is excellent value. Plus, your first month is free!";
    }
    
    if (input.includes('enterprise') || input.includes('production') || input.includes('critical') || input.includes('high traffic')) {
      return "For enterprise or mission-critical applications with high traffic, I recommend our **VPS Enterprise plan** (8 vCPU, 64 GB RAM, 800 GB NVMe) at €60/month. This handles heavy workloads, large databases, and high concurrent users. Includes all our premium features: daily backups, DDoS protection, and 24/7 monitoring.";
    }
    
    // Default recommendation
    return "Based on typical needs, I'd recommend our **VPS Standard plan** (3 vCPU, 8 GB RAM, 100 GB NVMe) at €12/month. It's our most popular choice and handles most websites, applications, and small businesses perfectly. Could you tell me more about your expected traffic or specific requirements? This will help me fine-tune the recommendation.";
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: analyzeUserNeeds(inputValue),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);

      // Follow-up message
      setTimeout(() => {
        const followUp: Message = {
          id: (Date.now() + 2).toString(),
          text: "All our plans include:\n• Free daily backups & DDoS protection\n• Unmetered 1 Gbps bandwidth\n• Full root access\n• Free migration assistance\n• No setup fees or hidden costs\n\nWould you like to proceed with this plan, or do you have more questions?",
          sender: 'ai',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, followUp]);
      }, 1000);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-md h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3>PremVPS AI Assistant</h3>
            <p className="text-xs text-blue-100">Online • Ready to help</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="whitespace-pre-line text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe your hosting needs..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}