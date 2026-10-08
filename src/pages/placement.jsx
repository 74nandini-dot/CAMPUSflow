import { useState } from 'react'
import './placement.css'
function Placement() {
  const [placements, setPlacements] = useState([
    {
      id: 1,
      company: "TCS",
      role: "Software Developer",
      package: "7 LPA",
      driveDate: "2026-10-15",
      eligibility: "CGPA 6.5+",
      status: "Open",
    },
    {
      id: 2,
      company: "Accenture",
      role: "Associate Software Engineer",
      package: "6.5 LPA",
      driveDate: "2026-10-18",
      eligibility: "CGPA 6.0+",
      status: "Open",
    },
  ])

  const handleStatusChange = (id, newStatus) => {
  setPlacements(
    placements.map((placement) =>
      placement.id === id
        ? { ...placement, status: newStatus }
        : placement
    )
  )
}

    const totalDrives = placements.length;

    const appliedCount = placements.filter(
    (placement) => placement.status === "Applied"
    ).length;

    const interviewCount = placements.filter(
    (placement) => placement.status === "Interview"
    ).length;

    const selectedCount = placements.filter(
    (placement) => placement.status === "Selected"
    ).length;

    const rejectedCount = placements.filter(
  (placement) => placement.status === "Rejected"
).length

  return (
    <div className="placement-page">
      <h1>Placement</h1>
      <p>Manage your placement preparation and opportunities.</p>

      <div className="placement-overview">
        <div className="placement-stat">
            <h2>{totalDrives}</h2>
            <p>Total Drives</p>
        </div>

        <div className="placement-stat">
            <h2>{appliedCount}</h2>
            <p>Applied</p>
        </div>

        <div className="placement-stat">
            <h2>{interviewCount}</h2>
            <p>Interviews</p>
        </div>

        <div className="placement-stat">
            <h2>{selectedCount}</h2>
            <p>Selected</p>
        </div>

        <div className="placement-stat">
        <h2>{rejectedCount}</h2>
        <p>Rejected</p>
      </div>
     </div>

        <section className="upcoming-drives">
          <h2>Upcoming Drives</h2>
          <p>
          {placements.filter(
            (placement) =>
              placement.status === "Open" &&
              new Date(placement.driveDate) >= new Date()
          ).length} upcoming drives
        </p>

        <div className="upcoming-drive-list">
        {placements
          .filter(
            (placement) =>
              placement.status === "Open" &&
              new Date(placement.driveDate) >= new Date()
          )
          .map((placement) => (
            <div className="upcoming-drive" key={placement.id}>
              <h3>{placement.company}</h3>
              <p>{placement.role}</p>
              <p>Drive Date: {placement.driveDate}</p>
            </div>
          ))}
      </div>
        </section>

          <section className="my-applications">
          <h2>My Applications</h2>

          <p>
            {placements.filter(
              (placement) => placement.status !== "Open"
            ).length} applications
          </p>

            <div className="application-list">
            {placements
              .filter((placement) => placement.status !== "Open")
              .map((placement) => (
                <div className="application-card" key={placement.id}>
                  <h3>{placement.company}</h3>
                  <p>{placement.role}</p>
                  <p>Package: {placement.package}</p>
                  <p>Drive Date: {placement.driveDate}</p>
                  <strong>{placement.status}</strong>
                </div>
              ))}
          </div>

        </section>

        <section className="placement-opportunities">
      <h2>Available Opportunities</h2>
      <p>Explore available placement opportunities.</p>
    </section>

        <div className="placement-list">
       {placements.map((placement) => (
        <div className="placement-card" key={placement.id}>
        <h2>{placement.company}</h2>

        <p>{placement.role}</p>

        <p>Package: {placement.package}</p>

        <p>Drive Date: {placement.driveDate}</p>

        <p>Eligibility: {placement.eligibility}</p>

        <strong className={`status-${placement.status.toLowerCase()}`}>
        {placement.status}
      </strong>
          {placement.status === "Open" && (
            <button
              type="button"
              onClick={() =>
                handleStatusChange(placement.id, "Applied")
              }
            >
              Apply Now
            </button>
          )}

          {placement.status === "Applied" && (
            <button
              type="button"
              onClick={() =>
                handleStatusChange(placement.id, "Interview")
              }
            >
              Mark Interview
            </button>
          )}

          {placement.status === "Interview" && (
            <>
              <button
                type="button"
                onClick={() =>
                  handleStatusChange(placement.id, "Selected")
                }
              >
                Mark Selected
              </button>

              <button
                type="button"
                onClick={() =>
                  handleStatusChange(placement.id, "Rejected")
                }
              >
                Mark Rejected
              </button>
            </>
          )}
        </div>
    ))}
    </div>

    </div>
  )
}

export default Placement
    

