import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import { AttendanceContext } from '../../context/AttendanceContext'
import { SubjectContext } from '../../context/SubjectContext'
import { PlacementContext } from '../../context/PlacementContext'

import './Dashboard.css'

import TaskCard from '../../components/TaskCard'
import DashboardHeader from '../../components/Dashboard/DashboardHeader/DashboardHeader'
import StatCard from '../../components/StatCard/StatCard'
import SubjectCard from '../../components/SubjectCard'
import AttendanceCard from '../../components/AttendanceCard'

function Dashboard() {
  const navigate = useNavigate()
  const { taskList } = useContext(TaskContext)
  const { subjectList } = useContext(SubjectContext)
  const { attendance } = useContext(AttendanceContext)

  const { placements } = useContext(PlacementContext)

const totalDrives = placements.length


const appliedCount = placements.filter(
  (placement) =>
    placement.hasApplied ||
    ['Applied', 'Interview', 'Selected', 'Rejected'].includes(placement.status)
).length

const interviewCount = placements.filter(
  (placement) =>
    placement.hasInterviewed ||
    ['Interview', 'Selected', 'Rejected'].includes(placement.status)
).length

const selectedCount = placements.filter(
  (placement) => placement.status === 'Selected'
).length


  const totalTasks = taskList.length

  const completedTasks = taskList.filter(
    (task) => task.completed
  ).length

  const pendingTasks = taskList.filter(
    (task) => !task.completed
  ).length

  const today = new Date()

  const dueSoonTasks = taskList.filter((task) => {
    if (task.completed) return false

    const dueDate = new Date(task.dueDate)

    if (Number.isNaN(dueDate.getTime())) {
      return false
    }

    const difference =
      (dueDate - today) / (1000 * 60 * 60 * 24)

    return difference >= 0 && difference <= 3
  })

  return (
    <div className="dashboard">

      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Overview */}
      <section className="overview">

        <StatCard
          number={totalTasks}
          title="Total Tasks"
          onClick={() => navigate('/tasks')}
        />

        <StatCard
          number={completedTasks}
          title="Completed"
          onClick={() => navigate('/tasks')}
        />

        <StatCard
          number={pendingTasks}
          title="Pending"
          onClick={() => navigate('/tasks')}
        />

        <StatCard
          number={dueSoonTasks.length}
          title="Due Soon"
          onClick={() => navigate('/tasks')}
        />

      </section>

      {/* Upcoming Tasks */}
      <section className="upcoming-tasks">

        <h2>Upcoming Tasks</h2>

        <div className="task-list">

          {taskList
            .filter((task) => !task.completed)
            .slice(0, 3)
            .map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                subject={task.subject}
                dueDate={
                  task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString(
                        'en-IN',
                        {
                          day: 'numeric',
                          month: 'short',
                        }
                      )
                    : 'No due date'
                }
                completed={task.completed}
                taskId={task.id}
                 onClick={() => navigate('/tasks')}
              />
            ))}

          {taskList.filter((task) => !task.completed).length === 0 && (
            <div className="empty-tasks">
              <div>✓</div>

              <h3>No upcoming tasks</h3>

              <p>
                You are all caught up!
              </p>
            </div>
          )}

        </div>

      </section>

      {/* Your Subjects */}
      <section className="subjects">

        <h2>Your Subjects</h2>

        <div className="subject-list">

          {subjectList.map((subject) => {
            const subjectAttendance =
              attendance[subject.id] || {
                total: '',
                attended: '',
              }

            const total = Number(
              subjectAttendance.total
            )

            const attended = Number(
              subjectAttendance.attended
            )

            const percentage =
              total > 0 && attended <= total
                ? (attended / total) * 100
                : 0

            return (
              <SubjectCard
                key={subject.id}
                name={subject.name}
                teacher={subject.teacher || 'Teacher not added' }
                attendance={percentage.toFixed(2)}
                onClick={() => navigate('/subjects')}
              />
            )
          })}

        </div>

      </section>

      {/* Attendance Overview */}
      <section className="attendance">

        <h2>Attendance Overview</h2>

        <div className="attendance-list">

          {subjectList.map((subject) => {
            const subjectAttendance =
              attendance[subject.id] || {
                total: '',
                attended: '',
              }

            const total = Number(
              subjectAttendance.total
            )

            const attended = Number(
              subjectAttendance.attended
            )

            const percentage =
              total > 0 && attended <= total
                ? (attended / total) * 100
                : 0

            return (
              <AttendanceCard
                key={subject.id}
                subject={subject.name}
                percentage={percentage.toFixed(2)}
                onClick={() => navigate('/attendance')}
              />
            )
          })}

        </div>
      </section>

            {/* Placement Overview */}
            <section className="dashboard-placement">
              <div className="placement-heading">
                <div>
                  <h2>Placement Overview</h2>
                  <p>Track your placement journey and opportunities.</p>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/placement')}
                >
                  View Placements →
                </button>
              </div>

              
            <div className="dashboard-placement-stats">
              <div className="dashboard-placement-stat">
                <h3>{totalDrives}</h3>
                <p>Total Drives</p>
              </div>

              <div className="dashboard-placement-stat">
                <h3>{appliedCount}</h3>
                <p>Applied</p>
              </div>

              <div className="dashboard-placement-stat">
                <h3>{interviewCount}</h3>
                <p>Interviews</p>
              </div>

              <div className="dashboard-placement-stat">
                <h3>{selectedCount}</h3>
                <p>Selected</p>
              </div>
            </div>


              <div className="dashboard-placement-card">
                <div className="placement-icon">💼</div>
                <div>
                  <h3>Ready for your next opportunity?</h3>
                  <p>
                    Explore company drives, track applications, and monitor
                    your placement progress.
                  </p>
                </div>
              </div>
            </section>
      

    </div>
  )
}

export default Dashboard