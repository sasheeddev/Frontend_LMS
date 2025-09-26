// app/student/[id]/page.tsx
import Image from "next/image";
import { FaGithub, FaFacebook } from "react-icons/fa";

type Project = {
  title: string;
  category: string;
  color: string; // Tailwind color class
};

type Student = {
  fullName: string;
  registrationNumber: string;
  department: string;
  email: string;
  currentAffiliation: string;
  displayName: string;
  photo: string;
  projects: Project[];
};

const student: Student = {
  fullName: "R.B. Abeysinghe",
  registrationNumber: "E/19/004",
  department: "Computer Engineering",
  email: "e19004@eng.pdn.ac.lk",
  currentAffiliation: "Department of Computer Engineering, University of Peradeniya",
  displayName: "Ravindu",
  photo: "/avatar.png",
  projects: [
    {
      title: "Event Attendance Management System",
      category: "Cyber-Physical Systems Projects",
      color: "bg-green-500",
    },
    {
      title: "AI Powered Knowledge Management System",
      category: "Undergraduate Research Projects",
      color: "bg-blue-500",
    },
    {
      title: "Keyboard for Visually Impaired",
      category: "Software Systems Projects",
      color: "bg-orange-500",
    },
  ],
};

export default function StudentProfile() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="max-w-5xl mx-auto w-full flex-grow p-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          Home / People / Students / E19 Batch /{" "}
          <span className="font-semibold">{student.displayName}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side - profile */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            <Image
              src={student.photo}
              alt="Profile Photo"
              width={200}
              height={200}
              className="rounded-lg shadow-md object-cover"
            />
            <h2 className="mt-3 text-lg font-semibold">{student.displayName}</h2>

            {/* Social Links */}
            <div className="flex gap-4 mt-3 text-gray-700">
              <a href="#" className="hover:text-black">
                <FaGithub size={24} />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Right side - details */}
          <div className="w-full md:w-2/3 space-y-4">
            <div className="border rounded-lg p-4 shadow-sm bg-white">
              <p>
                <span className="font-semibold">Full Name:</span>{" "}
                {student.fullName}
              </p>
              <p>
                <span className="font-semibold">Registration Number:</span>{" "}
                {student.registrationNumber}
              </p>
              <p>
                <span className="font-semibold">Department:</span>{" "}
                {student.department}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href={`mailto:${student.email}`}
                  className="text-blue-600"
                >
                  {student.email}
                </a>
              </p>
              <p>
                <span className="font-semibold">Current Affiliation:</span>{" "}
                {student.currentAffiliation}
              </p>
            </div>

            {/* Projects */}
            <div className="border rounded-lg p-4 shadow-sm bg-white">
              <h3 className="font-semibold mb-3">Projects</h3>
              <div className="space-y-3">
                {student.projects.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border rounded-lg p-3 hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 flex items-center justify-center text-white rounded-md ${p.color}`}
                      >
                        {/* Simple icon placeholder */}
                        <span className="text-xl">⚙️</span>
                      </div>
                      <div>
                        <p className="font-semibold">{p.title}</p>
                        <p className="text-sm text-gray-600">{p.category}</p>
                      </div>
                    </div>
                    <button className="px-4 py-1 border rounded text-blue-600 hover:bg-blue-50">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* (Optional) Footer to stick at bottom */}
      <footer className="p-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} University of Peradeniya
      </footer>
    </div>
  );
}
