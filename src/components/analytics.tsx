"use client"

import Script from 'next/script'

interface AnalyticsProps {
  measurementId?: string
}

export function Analytics({ measurementId }: AnalyticsProps) {
  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_title: document.title,
              page_location: window.location.href,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `,
        }}
      />
    </>
  )
}

// 글로벌 gtag 타입 선언
declare global {
  interface Window {
    gtag?: (...args: string[] | [string, string, Record<string, unknown>]) => void
  }
}

// 페이지 뷰 추적 함수
export function trackPageView(url: string, title?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (measurementId) {
      window.gtag('config', measurementId, {
        page_location: url,
        page_title: title || document.title,
      })
    }
  }
}

// 이벤트 추적 함수
export function trackEvent(
  action: string,
  category = 'general',
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
