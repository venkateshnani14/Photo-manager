import React from 'react'
import { analytics } from '../Firebase/config'
import { logEvent } from 'firebase/analytics'
const Analytics = () => {
  logEvent(analytics, 'notification_received');
  return (
    <div>Analytics</div>
  )
}

export default Analytics