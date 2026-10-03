import "./Dashboard.css";
import TaskCard from "../../components/TaskCard";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import StatCard from "../../components/StatCard/StatCard";
import SubjectCard from "../../components/SubjectCard";
import AttendanceCard from "../../components/AttendanceCard";


function Dashboard() {
  return (
    <div className="dashboard">

      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Overview Cards */}
      <section className="overview">
        <StatCard number="12" title="Total Tasks" />
        <StatCard number="7" title="Completed" />
        <StatCard number="5" title="Pending" />
        <StatCard number="3" title="Due Soon" />
      </section>


      <section className="upcoming-tasks">
      <h2>Upcoming Tasks</h2>

      <div className="task-list">
        <TaskCard
          title="DSA Assignment"
          subject="Data Structures"
          dueDate="Tomorrow"
        />

        <TaskCard
          title="Cloud Computing Notes"
          subject="Cloud Computing"
          dueDate="Oct 5"
        />

        <TaskCard
          title="React Project"
          subject="Web Development"
          dueDate="Oct 7"
        />
       </div>
      </section>

               {/* subjects */}
         <section className="subjects">
          <h2>Your Subjects</h2>

          <div className="subject-list">
            <SubjectCard
              name="Data Structures"
              teacher="Dr. Sharma"
              attendance={82}
            />

            <SubjectCard
              name="Cloud Computing"
              teacher="Prof. Verma"
              attendance={76}
            />

            <SubjectCard
              name="Machine Learning"
              teacher="Dr. Patel"
              attendance={89}
            />
          </div>
        </section>

          {/* Attendance */}
        <section className="attendance">
          <h2>Attendance Overview</h2>

          <div className="attendance-list">
            <AttendanceCard
              subject="Data Structures"
              percentage={82}
            />

            <AttendanceCard
              subject="Cloud Computing"
              percentage={76}
            />

            <AttendanceCard
              subject="Machine Learning"
              percentage={89}
            />
          </div>
        </section>

    </div>
  );
}

export default Dashboard;