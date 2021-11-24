const dev = process.env.NODE_ENV !== "production";

// log the pageview with their URL
export const LogPageView = (url) => {
    //only log in prod
    if(!dev)
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    })
  }
  
  // log specific events happening.
  export const event = ({ action, params }) => {
    window.gtag('event', action, params)
  }