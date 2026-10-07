import { useEffect, useState } from 'react'

function DashboardHeader() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 200)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="dashboard-header">
      <div className="header-content">

        <div className="header-label">
          <span className="header-dot"></span>
          STUDENT DASHBOARD
        </div>

        <h1 className={visible ? 'greeting-visible' : ''}>
          <span className="greeting-text">
            Welcome back
          </span>

          <span className="greeting-name">
            , Anju
          </span>

          <span className="greeting-wave">
            👋
          </span>
        </h1>

        <p>
          Stay focused, keep learning, and make today count.
        </p>

      </div>

      <div className="header-focus">
        <span className="focus-icon">✦</span>

        <div>
          <small>Today’s focus</small>
          <strong>Keep moving forward</strong>
        </div>
      </div>

    </div>
  )
}

export default DashboardHeader