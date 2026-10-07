import { useContext } from 'react'

import { TaskContext } from '../../context/TaskContext'
import { AttendanceContext } from '../../context/AttendanceContext'
import { SubjectContext } from '../../context/SubjectContext'

import './Dashboard.css'

import TaskCard from '../../components/TaskCard'
import DashboardHeader from '../../components/Dashboard/DashboardHeader/DashboardHeader'
import StatCard from '../../components/StatCard/StatCard'
import SubjectCard from '../../components/SubjectCard'
import AttendanceCard from '../../components/AttendanceCard'

function Dashboard() {
  const { taskList } = useContext(TaskContext)
  const { subjectList } = useContext(SubjectContext)
  const { attendance } = useContext(AttendanceContext)

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
        />

        <StatCard
          number={completedTasks}
          title="Completed"
        />

        <StatCard
          number={pendingTasks}
          title="Pending"
        />

        <StatCard
          number={dueSoonTasks.length}
          title="Due Soon"
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
                teacher={
                  subject.teacher ||
                  'Teacher not added'
                }
                attendance={percentage.toFixed(2)}
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
              />
            )
          })}

        </div>

      </section>

    </div>
  )
}

export default Dashboard