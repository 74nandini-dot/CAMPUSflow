import SubjectCard from './SubjectCard'
import AttendanceCard from './AttendanceCard'
import TaskCard from './TaskCard'

function StudentInfo(props) {
  return (
    <div>
      <p>Student: {props.name}</p>
      <p>Semester: {props.semester}</p>
    </div>
  )
}

function Dashboard(props) {
  return (
    <div>
      <h1>CampusFlow Dashboard</h1>
      <p>Welcome to your student dashboard.</p>

      <StudentInfo
        name={props.name}
        semester={props.semester}
      />

      <SubjectCard total={6} />
      <AttendanceCard percentage={82} />
      <TaskCard pending={3} />
    </div>
  )
}

export default Dashboard