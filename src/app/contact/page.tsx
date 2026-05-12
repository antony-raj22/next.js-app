'use client';
import { useState, useCallback } from 'react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', text: 'Message sent successfully!' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus({ type: 'error', text: 'Failed to send. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', text: 'Network error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  }, [name, email, message]);

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      {status && (
        <div className={`mb-4 p-3 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {status.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
            disabled={loading}
          />
        </div>
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}