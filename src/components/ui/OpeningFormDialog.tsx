"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
    X, Phone, User, Mail, Loader2, CheckCircle,
    MessageCircle, Search, Building2, ChevronDown, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { colleges, medicalColleges } from '@/lib/data';
import { trackConversion } from '@/lib/gtag';

// Top 6 popular colleges for the card section
const TOP_COLLEGES = [
    {
        slug: 'institute-of-engineering-management-kolkata',
        name: 'Institute of Engineering & Management',
        location: 'Salt Lake, Kolkata',
        imageUrl: '/images/colleges/iem-salt-lake.jpg',
        tag: 'Top Ranked',
    },
    {
        slug: 'techno-india-salt-lake',
        name: 'Techno India Main Salt Lake',
        location: 'Salt Lake, Kolkata',
        imageUrl: '/images/colleges/techno-india-salt-lake.png',
        tag: 'Affordable',
    },
    {
        slug: 'haldia-institute-of-technology',
        name: 'Haldia Institute of Technology',
        location: 'Haldia, West Bengal',
        imageUrl: '/images/colleges/haldia-institute-of-technology.jpg',
        tag: 'Core Placements',
    },
    {
        slug: 'rcc-institute-of-information-technology',
        name: 'RCC Institute of Information Technology',
        location: 'Kolkata, West Bengal',
        imageUrl: '/images/colleges/rcc-institute-of-information-technology.png',
        tag: 'Semi-Government',
    },
    {
        slug: 'jis-college-of-engineering',
        name: 'JIS College of Engineering',
        location: 'Kalyani, West Bengal',
        imageUrl: '/images/colleges/jis-college-of-engineering.jpg',
        tag: 'Autonomous',
    },
    {
        slug: 'heritage-institute-of-technology',
        name: 'Heritage Institute of Technology',
        location: 'Kolkata, West Bengal',
        imageUrl: '/images/colleges/heritage-institute-of-technology.png',
        tag: 'Top Ranked',
    },
];

type CollegeFilter = 'all' | 'engineering' | 'medical';

export function OpeningFormDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        selectedCollege: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    // College selector state
    const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);
    const [collegeSearch, setCollegeSearch] = useState('');
    const [collegeFilter, setCollegeFilter] = useState<CollegeFilter>('all');

    // Show dialog on page load (after 1.5s delay) if not dismissed in this session
    useEffect(() => {
        const dismissed = sessionStorage.getItem('openingFormDismissed');
        if (!dismissed) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    // Build combined college list keeping their original order from data.ts
    const allColleges = useMemo(() => {
        const engg = colleges.map(c => ({
            name: c.name,
            type: 'engineering' as const,
            reviews: c.reviews,
        }));
        const med = medicalColleges.map(c => ({
            name: c.name,
            type: 'medical' as const,
            reviews: c.reviews,
        }));
        return [...engg, ...med];
    }, []);

    const filteredColleges = useMemo(() => {
        return allColleges.filter(c => {
            const matchesFilter = collegeFilter === 'all' || c.type === collegeFilter;
            const matchesSearch = c.name.toLowerCase().includes(collegeSearch.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    }, [allColleges, collegeFilter, collegeSearch]);

    const handleClose = () => {
        if (!isSubmitting) {
            setIsOpen(false);
            sessionStorage.setItem('openingFormDismissed', 'true');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const nameParts = formData.fullName.trim().split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.selectedCollege
                        ? `Interested in: ${formData.selectedCollege}`
                        : 'General enquiry from opening form',
                    leadType: 'Opening Form',
                    interestedCollege: formData.selectedCollege || '',
                }),
            });

            if (!response.ok) throw new Error('Failed to submit');

            trackConversion();
            setIsSuccess(true);
            setFormData({ fullName: '', email: '', phone: '', selectedCollege: '' });
            // Auto close after 3s on success
            setTimeout(() => {
                handleClose();
                setIsSuccess(false);
            }, 3000);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Dialog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 40 }}
                        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                        className="fixed inset-0 z-[201] flex items-start md:items-center justify-center p-3 md:p-4 pointer-events-none overflow-y-auto"
                    >
                        <div
                            className="relative w-full max-w-lg bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto my-4 md:my-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-3 right-3 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                                disabled={isSubmitting}
                                aria-label="Close dialog"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            {/* Scrollable Content */}
                            <div className="max-h-[90vh] overflow-y-auto">
                                {/* Header Banner */}
                                <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6 pt-6 pb-5 text-center">
                                    <div className="inline-flex items-center gap-1.5 bg-[#f6c804]/20 text-[#f6c804] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f6c804] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f6c804]"></span>
                                        </span>
                                        Admissions Open 2026
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                        Register Now for <span className="text-[#f6c804]">Admission 2026</span>
                                    </h2>
                                    <p className="text-zinc-400 text-sm mt-1.5">Get free counselling & admission guidance</p>
                                </div>

                                {/* Content */}
                                <div className="p-5 md:p-6">
                                    {isSuccess ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-center py-8"
                                        >
                                            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                            <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                                            <p className="text-zinc-400">Our counselor will contact you shortly.</p>
                                        </motion.div>
                                    ) : (
                                        <>
                                            {/* Form */}
                                            <form onSubmit={handleSubmit} className="space-y-3.5">
                                                {/* Name */}
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="Full Name *"
                                                        value={formData.fullName}
                                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                        className="w-full h-11 pl-10 pr-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:border-[#f6c804] focus:ring-1 focus:ring-[#f6c804] outline-none transition-all"
                                                    />
                                                </div>

                                                {/* Email */}
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                                                    <input
                                                        type="email"
                                                        placeholder="Email Address"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        className="w-full h-11 pl-10 pr-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:border-[#f6c804] focus:ring-1 focus:ring-[#f6c804] outline-none transition-all"
                                                    />
                                                </div>

                                                {/* Phone */}
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                                                    <input
                                                        type="tel"
                                                        required
                                                        placeholder="Phone Number *"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        className="w-full h-11 pl-10 pr-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:border-[#f6c804] focus:ring-1 focus:ring-[#f6c804] outline-none transition-all"
                                                    />
                                                </div>

                                                {/* College Selector */}
                                                <div className="relative">
                                                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 z-10" />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowCollegeDropdown(!showCollegeDropdown)}
                                                        className="w-full h-11 pl-10 pr-10 rounded-lg bg-zinc-800 border border-zinc-700 text-left text-sm outline-none transition-all focus:border-[#f6c804] focus:ring-1 focus:ring-[#f6c804]"
                                                    >
                                                        <span className={formData.selectedCollege ? 'text-white' : 'text-zinc-500'}>
                                                            {formData.selectedCollege || 'Select College (Optional)'}
                                                        </span>
                                                    </button>
                                                    <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 transition-transform ${showCollegeDropdown ? 'rotate-180' : ''}`} />

                                                    {/* Dropdown */}
                                                    <AnimatePresence>
                                                        {showCollegeDropdown && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: -5 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -5 }}
                                                                transition={{ duration: 0.15 }}
                                                                className="absolute top-full left-0 right-0 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-50 overflow-hidden"
                                                            >
                                                                {/* Filter Tabs */}
                                                                <div className="flex border-b border-zinc-700">
                                                                    {([
                                                                        ['all', 'All'],
                                                                        ['engineering', 'Engineering'],
                                                                        ['medical', 'Medical'],
                                                                    ] as [CollegeFilter, string][]).map(([key, label]) => (
                                                                        <button
                                                                            key={key}
                                                                            type="button"
                                                                            onClick={() => setCollegeFilter(key)}
                                                                            className={`flex-1 py-2 text-xs font-medium transition-colors ${collegeFilter === key
                                                                                ? 'text-[#f6c804] border-b-2 border-[#f6c804] bg-[#f6c804]/5'
                                                                                : 'text-zinc-500 hover:text-zinc-300'
                                                                                }`}
                                                                        >
                                                                            {label}
                                                                        </button>
                                                                    ))}
                                                                </div>

                                                                {/* Search */}
                                                                <div className="p-2 border-b border-zinc-700">
                                                                    <div className="relative">
                                                                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Search colleges..."
                                                                            value={collegeSearch}
                                                                            onChange={(e) => setCollegeSearch(e.target.value)}
                                                                            className="w-full h-8 pl-8 pr-3 rounded-md bg-zinc-700 border-none text-xs text-white placeholder:text-zinc-400 outline-none"
                                                                            onClick={(e) => e.stopPropagation()}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                {/* List */}
                                                                <div className="max-h-60 overflow-y-auto">
                                                                    {filteredColleges.length === 0 && (
                                                                        <p className="text-xs text-zinc-400 text-center py-3">No colleges found</p>
                                                                    )}
                                                                    {filteredColleges.map((c) => (
                                                                        <button
                                                                            key={c.name}
                                                                            type="button"
                                                                            onClick={() => {
                                                                                setFormData({ ...formData, selectedCollege: c.name });
                                                                                setShowCollegeDropdown(false);
                                                                                setCollegeSearch('');
                                                                            }}
                                                                            className={`w-full text-left px-3 py-2 text-xs hover:bg-[#f6c804]/10 transition-colors flex items-center justify-between ${formData.selectedCollege === c.name ? 'bg-[#f6c804]/10 text-[#f6c804]' : 'text-zinc-300'
                                                                                }`}
                                                                        >
                                                                            <span className="truncate pr-2">{c.name}</span>
                                                                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ${c.type === 'engineering'
                                                                                ? 'bg-blue-900/30 text-blue-400'
                                                                                : 'bg-green-900/30 text-green-400'
                                                                                }`}>
                                                                                {c.type === 'engineering' ? 'Engg' : 'Medical'}
                                                                            </span>
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>

                                                {error && <p className="text-red-400 text-xs">{error}</p>}

                                                {/* Submit Button */}
                                                <Button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full h-11 bg-[#f6c804] hover:bg-[#e5b703] text-black font-bold rounded-lg transition-all text-sm"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                                            Submitting...
                                                        </>
                                                    ) : (
                                                        'Register Now'
                                                    )}
                                                </Button>

                                                {/* Call & WhatsApp Buttons */}
                                                <div className="grid grid-cols-2 gap-3">
                                                    <a href="tel:+919874878782" className="block">
                                                        <Button
                                                            type="button"
                                                            variant="outline"
                                                            className="w-full h-10 text-xs font-semibold rounded-lg gap-1.5 border-zinc-600 text-zinc-300 hover:border-[#f6c804] hover:text-[#f6c804] transition-all"
                                                        >
                                                            <Phone className="h-3.5 w-3.5" />
                                                            Call Us
                                                        </Button>
                                                    </a>
                                                    <a href="https://wa.me/919874878782" target="_blank" rel="noopener noreferrer" className="block">
                                                        <Button
                                                            type="button"
                                                            variant="outline"
                                                            className="w-full h-10 text-xs font-semibold rounded-lg gap-1.5 border-green-500/50 text-green-500 hover:bg-green-500/10 hover:border-green-500 transition-all"
                                                        >
                                                            <MessageCircle className="h-3.5 w-3.5" />
                                                            WhatsApp Us
                                                        </Button>
                                                    </a>
                                                </div>
                                            </form>

                                            {/* Divider */}
                                            <div className="my-5 border-t border-zinc-700" />

                                            {/* Top Colleges Section */}
                                            <div>
                                                <h3 className="text-sm font-bold text-zinc-200 mb-3">
                                                    Get admission into top colleges
                                                </h3>
                                                <div className="grid grid-cols-3 gap-2">
                                                    {TOP_COLLEGES.map((college) => (
                                                        <Link
                                                            key={college.slug}
                                                            href={`/colleges/${college.slug}`}
                                                            onClick={handleClose}
                                                            className="group block rounded-lg border border-zinc-700 overflow-hidden hover:border-[#f6c804]/50 hover:shadow-md transition-all duration-200"
                                                        >
                                                            <div className="relative aspect-[4/3] bg-zinc-800">
                                                                <Image
                                                                    src={college.imageUrl}
                                                                    alt={college.name}
                                                                    fill
                                                                    sizes="120px"
                                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                                />
                                                            </div>
                                                            <div className="p-1.5">
                                                                <p className="text-[10px] font-semibold leading-tight text-zinc-200 line-clamp-2 group-hover:text-[#f6c804] transition-colors">
                                                                    {college.name}
                                                                </p>
                                                                <span className="inline-block mt-0.5 text-[8px] px-1.5 py-0.5 bg-[#f6c804]/10 text-[#f6c804] rounded-full font-medium">
                                                                    {college.tag}
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>

                                                {/* Explore All Button */}
                                                <Link
                                                    href="/colleges"
                                                    onClick={handleClose}
                                                    className="mt-3 flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-xs font-semibold text-[#f6c804] bg-[#f6c804]/10 hover:bg-[#f6c804]/20 transition-colors"
                                                >
                                                    Explore All Colleges <ArrowRight className="h-3 w-3" />
                                                </Link>
                                            </div>

                                            {/* Bottom Note */}
                                            <p className="mt-4 text-[10px] text-center text-zinc-500 leading-relaxed">
                                                <strong>Note:</strong> We connect you with colleges and support your next steps.
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
