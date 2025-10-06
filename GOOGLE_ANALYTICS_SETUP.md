# Google Analytics Setup Guide

## 📊 Google Analytics 4 Configuration

Your TowConnect website is now ready for Google Analytics tracking! Follow these steps to complete the setup:

### 1. Create Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Start measuring" or "Create Account"
3. Set up your account:
   - **Account Name**: `501 Towing & Roadside`
   - **Property Name**: `TowConnect Website`
   - **Country**: United States
   - **Currency**: US Dollar
   - **Industry**: Automotive
4. Choose "Web" as your platform
5. Add your website URL: `https://fiveoonetowing.com`
6. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variables

#### Local Development
Update the `.env` file in your project root:
```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Netlify Production
1. Go to [Netlify Dashboard](https://app.netlify.com/projects/towconnect-501)
2. Navigate to **Site settings** > **Environment variables**
3. Add new environment variable:
   - **Key**: `VITE_GA_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX` (your actual Measurement ID)
4. Click **Save**
5. Redeploy your site (automatic or manual)

### 3. Verify Tracking

After setting up:

1. **Real-time Testing**:
   - Visit your website: https://fiveoonetowing.com
   - Open Google Analytics > Reports > Realtime
   - You should see your visit tracked

2. **Test Events**:
   - Click phone call buttons → should track `phone_call` events
   - Use rate calculator → should track `rate_calculation` events
   - Navigate between pages → should track page views
   - Submit contact form → should track `form_submit` events

## 🎯 Tracking Events Implemented

### Core Business Events
- **Phone Calls**: Tracks when users click call buttons
- **Rate Calculations**: Tracks calculator usage with service type and amount
- **Form Submissions**: Tracks contact form completions
- **Service Interest**: Tracks which services users are interested in

### User Journey Events
- **Page Views**: Automatic tracking of all page visits
- **Navigation**: Tracks menu usage and routing
- **Distance Tool**: Tracks usage of mapping tools
- **Emergency Banner**: Tracks emergency banner interactions

## 📈 Key Metrics to Monitor

### Business Performance
- **Phone call conversion rate** from different pages
- **Most popular services** from Learn More clicks
- **Rate calculator usage** and average quotes
- **Contact form completion rate**

### User Experience
- **Page views** and most visited sections
- **Bounce rate** and session duration
- **Mobile vs desktop** usage patterns
- **Emergency vs regular** service requests

## 🔧 Customization Options

The analytics setup is fully customizable. Key files:

- `client/src/lib/analytics.ts` - Analytics configuration and event functions
- `client/src/components/` - Components with tracking integrated
- `.env` - Environment configuration

### Adding Custom Events
```typescript
import { trackEvent } from '@/lib/analytics';

// Custom event example
trackEvent({
  action: 'custom_action',
  category: 'business',
  label: 'specific_label',
  value: 1
});
```

## 🎛️ Google Analytics Dashboard Setup

### Recommended Custom Reports
1. **Towing Business Overview**
   - Phone calls by source
   - Rate calculator usage
   - Service interest breakdown

2. **Customer Journey**
   - Page flow from landing to conversion
   - Mobile emergency usage
   - Geographic distribution

3. **Performance Metrics**
   - Response time tracking (via events)
   - Conversion funnel analysis
   - Seasonal trend analysis

## ⚡ Current Status

✅ **Analytics Code**: Fully implemented  
✅ **Event Tracking**: 8+ business events tracked  
✅ **Page Views**: Automatic SPA routing tracking  
✅ **Mobile Ready**: Responsive tracking for emergency use  
⏳ **GA4 Property**: Needs your Measurement ID  
⏳ **Environment Variable**: Set in Netlify dashboard  

## 🚀 Next Steps

1. **Set up Google Analytics 4 property** (5 minutes)
2. **Add Measurement ID to Netlify** environment variables (2 minutes)  
3. **Test tracking** with real visits (5 minutes)
4. **Set up custom dashboards** in GA4 (optional)

Your towing business analytics will provide valuable insights into customer behavior, popular services, and conversion optimization opportunities!