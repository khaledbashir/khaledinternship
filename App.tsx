
import React, { useState, useCallback, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { ChatMessage } from './types';
import { PRESENTATION_CONTEXT } from './constants';
import Sidebar from './components/Header';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import DailyTasks from './components/DailyTasks';
import ProjectOverview from './components/ProjectOverview';
import Conclusion from './components/Conclusion';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
    const [isChatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const chatRef = useRef<Chat | null>(null);

    const initializeChat = useCallback(() => {
        if (!chatRef.current) {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                chatRef.current = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                      systemInstruction: PRESENTATION_CONTEXT,
                    },
                });
            } catch (error) {
                console.error("Failed to initialize Gemini AI:", error);
                setMessages(prev => [...prev, { role: 'model', text: "Sorry, I couldn't connect to the AI service. Please check the API key." }]);
            }
        }
    }, []);

    const handleSendMessage = async (userInput: string) => {
        if (!userInput.trim() || isLoading) return;

        setIsLoading(true);
        const newMessages: ChatMessage[] = [...messages, { role: 'user', text: userInput }];
        setMessages(newMessages);

        initializeChat();
        if (!chatRef.current) {
            setIsLoading(false);
            return;
        }

        try {
            const response = await chatRef.current.sendMessage({ message: userInput });
            
            setMessages(prev => [...prev, { role: 'model', text: response.text }]);
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            setMessages(prev => [...prev, { role: 'model', text: "Oops! Something went wrong. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const suggestedQuestions = [
        "What is Aqaba Logistics Village?",
        "What was the main project about?",
        "What skills did you learn?",
    ];

    return (
        <div className="min-h-screen bg-[#F8F7F5] text-[#4A4441]">
            <Sidebar />
            <main className="md:pl-64">
                <Hero />
                <CompanyOverview />
                <DailyTasks />
                <ProjectOverview />
                <Conclusion />
            </main>
            <Chatbot 
                isOpen={isChatOpen}
                onToggle={() => setChatOpen(!isChatOpen)}
                messages={messages}
                onSendMessage={handleSendMessage}
                isLoading={isLoading}
                suggestedQuestions={suggestedQuestions}
            />
        </div>
    );
};

export default App;