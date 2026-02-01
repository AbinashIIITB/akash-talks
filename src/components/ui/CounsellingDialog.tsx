"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, User, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCounsellingDialog } from '@/components/providers/CounsellingDialogProvider';

export function CounsellingDialog() {
    const { isOpen, closeDialog } = useCounsellingDialog();
    const [formData, setFormData] = useState({ fullName: '', phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/counselling', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    phone: formData.phone,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            setIsSuccess(true);
            setTimeout(() => {
                closeDialog();
                setIsSuccess(false);
                setFormData({ fullName: '', phone: '' });
            }, 2000);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        if (!isSubmitting) {
            closeDialog();
            setFormData({ fullName: '', phone: '' });
            setError('');
            setIsSuccess(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    onClick={handleClose}
                >
                    {/* Backdrop with blur */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Dialog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-[#f6c804] to-[#e5b703] p-6 text-black">
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-1 rounded-full hover:bg-black/10 transition-colors"
                                disabled={isSubmitting}
                            >
                                <X className="h-5 w-5" />
                            </button>
                            <h2 className="text-2xl font-bold">Book Free Counselling</h2>
                            <p className="text-black/70 mt-1">Get expert guidance for your admission</p>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-8"
                                >
                                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                                    <p className="text-muted-foreground">We'll contact you shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter your full name"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                className="w-full h-12 pl-10 pr-4 rounded-lg bg-muted/50 border border-border focus:border-[#f6c804] focus:ring-2 focus:ring-[#f6c804]/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full h-12 pl-10 pr-4 rounded-lg bg-muted/50 border border-border focus:border-[#f6c804] focus:ring-2 focus:ring-[#f6c804]/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {error && (
                                        <p className="text-red-500 text-sm">{error}</p>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-12 bg-[#f6c804] hover:bg-[#e5b703] text-black font-semibold rounded-lg transition-all"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            'Get Free Counselling'
                                        )}
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground">
                                        By submitting, you agree to be contacted by our counselors.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
