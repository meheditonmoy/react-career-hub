import { useLoaderData, useParams } from "react-router-dom";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id}  = useParams();
    const idInt =  parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleAppliedJob = () =>{
        toast('You have Applied successfully');
    }
    return (
        <div>
            <h2>Job Details : {id}</h2>
            <div className="grid md:grid-cols-6 gap-3">
                <div className="col-span-4 border-2 rounded-lg space-y-5 p-2">
                    <p className="text-[#757575] font-medium"> <span className="font-extrabold text-black">Job Description:</span>{job.job_description}</p>
                    <p className="text-[#757575] font-medium"><span className="font-extrabold text-black">Job Responsibility:</span>{job.job_responsibility}</p>
                    <h4 className="text-[#757575] font-medium"><span className="font-extrabold text-black">Educational Requirements:</span> <br /> {job.educational_requirements}</h4>
                    <h4 className="text-[#757575] font-medium"><span   className="font-extrabold text-black">Experiences:</span><br />{job.experiences}</h4>
                </div>
                <div className="md:col-span-2 ">
                    <div className="space-y-4 bg-[#7E90FE1A] p-2 rounded-lg">
                        <h4 className="text-2xl font-bold">Job Details</h4>
                        <hr className="border-2" />
                        <h4 className="flex items-center gap-2 font-medium text-[#757575]"><span className="flex items-center gap-1 font-extrabold text-black"><AiTwotoneDollarCircle className="text-xl"></AiTwotoneDollarCircle> Salary :</span>{job.salary} (Per Month)</h4>
                        <h4 className="flex items-center gap-2 font-medium text-[#757575]"><span className="flex items-center gap-1 font-extrabold text-black"><FaRegCalendarAlt className="text-xl"></FaRegCalendarAlt>Job Title :</span>{job.job_title}</h4>

                        <h3 className="text-lg font-extrabold">Contact Information</h3>
                        <hr className="border-2" />

                        <h4 className="flex items-center gap-2 font-medium text-[#757575]"> <span className="flex items-center gap-1 font-extrabold text-black"> <FiPhone className="text-lg"></FiPhone>Phone :</span> {job.contact_information.phone}</h4>
                        <h4 className="flex items-center gap-2 font-medium text-[#757575]"> <span className="flex items-center gap-1 font-extrabold text-black"> <AiOutlineMail className="text-lg"></AiOutlineMail>Email :</span> {job.contact_information.email}</h4>
                        <h4 className="flex gap-2  items-start font-medium text-[#757575]"> <span className="flex items-center gap-1 font-extrabold text-black"> <CiLocationOn className="text-lg"></CiLocationOn>Address:</span> {job.contact_information.address}</h4>
                    </div>
                    <button onClick={handleAppliedJob} className="w-full btn btn-primary mt-6">Apply Now</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;