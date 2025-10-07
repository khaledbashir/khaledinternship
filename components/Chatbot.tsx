
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';

interface ChatbotProps {
    isOpen: boolean;
    onToggle: () => void;
    messages: ChatMessage[];
    onSendMessage: (message: string) => void;
    isLoading: boolean;
    suggestedQuestions: string[];
}

const ChatbotIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9.45 13.73c-.22.28-.53.44-.86.44-.22 0-.43-.07-.63-.22-.4-.3-.52-.83-.29-1.29l1.9-3.88c.23-.47.76-.64 1.23-.41.47.23.64.76.41 1.23l-1.76 3.69zm5.1 0c-.22.28-.53.44-.86.44-.22 0-.43-.07-.63-.22-.4-.3-.52-.83-.29-1.29l1.9-3.88c.23-.47.76-.64 1.23-.41.47.23.64.76.41 1.23l-1.76 3.69z"/>
    </svg>
);

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onToggle, messages, onSendMessage, isLoading, suggestedQuestions }) => {
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
        }
    };
    
    const handleSuggestedQuestion = (question: string) => {
        if (!isLoading) {
            onSendMessage(question);
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isLoading) {
            handleSend();
        }
    };

    return (
        <>
            <button
                onClick={onToggle}
                className="fixed bottom-6 right-6 bg-gradient-to-br from-[#4A4441] to-[#746c68] text-white p-4 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 z-50"
                aria-label="Toggle Chatbot"
            >
                {isOpen ? <CloseIcon /> : <ChatbotIcon />}
            </button>

            <div
                className={`fixed bottom-24 right-6 w-[90vw] max-w-sm h-[70vh] max-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col transform transition-all duration-300 ease-in-out z-40 ${
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            >
                <header className="bg-gray-100 p-4 border-b rounded-t-lg">
                    <h3 className="font-bold text-lg text-center gradient-text">Ask about the Internship</h3>
                </header>

                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-4">
                        <div className="flex justify-start">
                             <div className="bg-[#4A4441] text-white p-3 rounded-lg max-w-xs">
                                Hi there! I'm an AI assistant. Ask me anything about this internship report, or try one of the suggestions below.
                            </div>
                        </div>
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`${msg.role === 'user' ? 'bg-[#746c68] text-white' : 'bg-gray-200 text-gray-800'} p-3 rounded-lg max-w-xs whitespace-pre-wrap`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-200 text-gray-800 p-3 rounded-lg">
                                    <div className="flex items-center space-x-1">
                                        <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                <div className="p-4 border-t bg-gray-50 rounded-b-lg">
                    {messages.length === 0 && !isLoading && (
                         <div className="mb-3 text-sm text-gray-500">
                            <p className="font-medium mb-2">Suggested Questions:</p>
                            <div className="flex flex-wrap gap-2">
                                {suggestedQuestions.map((q) => (
                                    <button
                                        key={q}
                                        onClick={() => handleSuggestedQuestion(q)}
                                        className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors text-xs"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your question..."
                            className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-[#CBBFB8] focus:outline-none"
                            disabled={isLoading}
                        />
                        <button onClick={handleSend} disabled={isLoading || !input.trim()} className="bg-[#4A4441] text-white px-4 py-2 rounded-lg disabled:bg-gray-400 hover:bg-[#332f2d] transition-colors">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
