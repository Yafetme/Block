'use client';

import * as React from 'react';
import { HelpCircle, MessageCircle, ChevronDown } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from "../../lib/utils";
import { useLanguage } from "../../contexts/LanguageContext";

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('', className)}
		{...props}
	/>
));
CustomAccordionItem.displayName = 'CustomAccordionItem';

const CustomAccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'group flex flex-1 items-center justify-between gap-4 rounded-2xl p-4 text-left',
				'bg-[#ffff] transition-all hover:bg-gray-50/70 hover:shadow-md border border-parchment-border/50',
				'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mysteria-purple',
				'data-[state=open]:shadow-md',
				className
			)}
			{...props}
		>
			<div className="flex items-center gap-4">
				<HelpCircle className="h-5 w-5 text-mysteria-purple" />
				<span className="text-lg font-medium text-charcoal-ink tracking-wide">
					{children}
				</span>
			</div>
			<div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-surface-container-lowest transition-transform group-hover:scale-105 group-data-[state=open]:rotate-180 text-amethyst-link">
				<ChevronDown className="h-4 w-4" />
			</div>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = 'CustomAccordionTrigger';

const CustomAccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(
			'overflow-hidden text-charcoal-ink/80',
			'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2',
			className
		)}
		{...props}
	>
		<div className="mt-4 ml-14">
			<div className="flex items-start gap-4 rounded-2xl bg-[#ffff] p-4 shadow-sm border border-parchment-border/50 transition-all">
				<span className="flex-1 text-md leading-relaxed">{children}</span>
				<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-lavender-glow/20 transition-transform hover:scale-105 text-mysteria-purple">
					<MessageCircle className="h-5 w-5" />
				</div>
			</div>
		</div>
	</AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = 'CustomAccordionContent';

export {
	CustomAccordion,
	CustomAccordionItem,
	CustomAccordionTrigger,
	CustomAccordionContent,
};

const faqs = [
	{
		question: 'How do I join the Block Matrix ecosystem?',
		answer:
			'Connect your Web3 wallet (e.g., MetaMask or Trust Wallet) and activate your account with a one-time entry of 80 USDT. The smart contract handles the rest automatically.',
	},
	{
		question: 'Is the system really 100% on-chain?',
		answer:
			'Yes. Every transaction, referral link, and reward payout is verified and executed entirely via smart contracts. There are no central servers holding your funds.',
	},
	{
		question: 'Do I need to refer people to earn?',
		answer:
			'While directing referrals drastically accelerates your progress (especially for V4-V10 tiers), the global binary matrix ensures that you can also benefit from "spillover" placed under you by the community.',
	},
	{
		question: 'How are rewards distributed?',
		answer:
			'Rewards are instantly deposited to your connected wallet whenever there is a transaction in your downline that qualifies according to your membership level (V1-V10).',
	},
	{
		question: 'What are the network fees involved?',
		answer:
			'You only pay standard gas fees for the network you choose (e.g., BNB Chain, Ethereum). Block Matrix itself does not charge hidden withdrawal or deposit fees.',
	},
];

export function AccordionComponent() {
	const { t } = useLanguage();
	return (
		<section className="py-20 md:py-32 w-full p-4 flex flex-col items-center justify-center md:p-8 bg-surface-container-lowest border-t border-parchment-border">
			<div className="max-w-[800px] w-full mx-auto">
				<h2 className="mb-4 text-center font-semibold text-charcoal-ink" style={{ fontSize: "40px", lineHeight: 0.96, letterSpacing: "-1px" }}>
					{t('faq.title')}
				</h2>
        <p className="text-center text-charcoal-ink/70 mb-12" style={{ fontSize: "20px" }}>{t('faq.subtitle')}</p>
				<CustomAccordion
					type="single"
					collapsible
					defaultValue="item-1"
					className="space-y-6"
				>
					{[1, 2, 3, 4, 5].map((index) => (
						<CustomAccordionItem
							key={index}
							value={`item-${index}`}
						>
							<CustomAccordionTrigger>{t(`faq.q${index}`)}</CustomAccordionTrigger>
							<CustomAccordionContent>{t(`faq.a${index}`)}</CustomAccordionContent>
						</CustomAccordionItem>
					))}
				</CustomAccordion>
			</div>
		</section>
	);
}
