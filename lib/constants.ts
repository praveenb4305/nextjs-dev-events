export type EventItem = {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: EventItem[] = [
    {
        "image": "/images/event1.png",
        "title": "Nokia Tech Summit 2024",
        "slug": "nokia-tech-summit-2024",
        "location": "Helsinki, Finland",
        "date": "new Date('2024-10-26T09:00:00Z')",
        "time": "09:00 AM - 05:00 PM"
    },
    {
        "image": "/images/event2.png",
        "title": "Global 5G Innovation Forum",
        "slug": "global-5g-innovation-forum",
        "location": "Virtual Event",
        "date": "new Date('2024-11-15T10:00:00Z')",
        "time": "10:00 AM - 04:00 PM GMT"
    },
    {
        "image": "/images/event3.png",
        "title": "Webinar: Building Sustainable Networks",
        "slug": "sustainable-networks-webinar",
        "location": "Online",
        "date": "new Date('2024-09-20T14:00:00Z')",
        "time": "02:00 PM - 03:30 PM CET"
    },
    {
        "image": "/images/event4.png",
        "title": "Future of Connectivity Conference",
        "slug": "future-of-connectivity-conference",
        "location": "London, UK",
        "date": "new Date('2025-01-22T08:30:00Z')",
        "time": "08:30 AM - 06:00 PM"
    },
    {
        "image": "/images/event5.png",
        "title": "Private Wireless Solutions Workshop",
        "slug": "private-wireless-solutions-workshop",
        "location": "Dallas, USA",
        "date": "new Date('2024-12-05T09:30:00Z')",
        "time": "09:30 AM - 04:00 PM CST"
    },
    {
        "image": "/images/event6.png",
        "title": "Optical Networks Global Summit",
        "slug": "optical-networks-global-summit",
        "location": "Singapore",
        "date": "new Date('2025-03-10T10:00:00Z')",
        "time": "10:00 AM - 05:30 PM SGT"
    }
]