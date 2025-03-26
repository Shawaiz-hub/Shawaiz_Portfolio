
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Eye, Trash2, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  read: boolean;
}

const initialMessages: Message[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    message: "Hello, I'm interested in hiring you for a project. Can we discuss details?",
    date: "2023-08-15",
    read: true,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    message: "Your portfolio is impressive! I'd like to talk about a potential collaboration.",
    date: "2023-08-20",
    read: false,
  },
  {
    id: "3",
    name: "Michael Smith",
    email: "michael@example.com",
    message: "Hi, I have a question about your services. What are your rates for a small business website?",
    date: "2023-08-22",
    read: false,
  },
];

const MessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [currentMessage, setCurrentMessage] = useState<Message | null>(null);
  const [replyText, setReplyText] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleViewMessage = (message: Message) => {
    setCurrentMessage(message);
    setIsDialogOpen(true);
    
    // Mark as read if it wasn't already
    if (!message.read) {
      setMessages(
        messages.map((m) =>
          m.id === message.id ? { ...m, read: true } : m
        )
      );
    }
  };

  const handleDeleteMessage = (id: string) => {
    const messageToDelete = messages.find(m => m.id === id);
    if (messageToDelete) {
      setMessages(messages.filter((m) => m.id !== id));
      toast({
        title: "Message deleted",
        description: `Message from ${messageToDelete.name} has been deleted.`,
        variant: "destructive",
      });
    }
  };

  const handleSendReply = () => {
    if (currentMessage && replyText.trim()) {
      toast({
        title: "Reply sent",
        description: `Your reply to ${currentMessage.name} has been sent.`,
      });
      setReplyText("");
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">User Messages</h1>
      
      <Card className="backdrop-blur-lg bg-black/30 border-white/10">
        <CardHeader>
          <CardTitle>Inbox</CardTitle>
          <CardDescription>
            Manage messages from your website visitors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        message.read
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {message.read ? "Read" : "New"}
                    </span>
                  </TableCell>
                  <TableCell className="font-medium">{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.date}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleViewMessage(message)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteMessage(message.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {messages.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No messages in your inbox
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Message from {currentMessage?.name}</DialogTitle>
            <DialogDescription>
              Received on {currentMessage?.date}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                From: {currentMessage?.name} ({currentMessage?.email})
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                {currentMessage?.message}
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <Label htmlFor="reply">Reply</Label>
              <Textarea
                id="reply"
                rows={5}
                placeholder="Type your reply here..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={handleSendReply} disabled={!replyText.trim()}>
              <Send className="mr-2 h-4 w-4" /> Send Reply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MessagesPage;
