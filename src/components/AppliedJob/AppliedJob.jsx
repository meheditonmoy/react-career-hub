import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageJobApplication } from "../../utility/LocalStorage";
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";



const AppliedJob = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs =  appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        }
        else if(filter  === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStorageJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobsApplied = [];

            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }


    }, [jobs])
    return (
        <div>
            <div className="min-h-60 justify-center items-center flex">
                <h2 className="text-5xl text-center ">Applied Jobs</h2>
            </div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Job i Applied :{appliedJobs.length}</h2>

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Filter By <RiArrowDropDownLine className="text-3xl"></RiArrowDropDownLine></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </div>
            </div>

            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <div className="card card-side bg-base-100 shadow-xl gap-4 mt-3 space-y-4">
                            <figure><img className="w-[250px]" src={job.logo} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{job.job_title}</h2>
                                <p>{job.company_name}</p>
                                <div>
                                    <button className="px-5 py-2 border font-extrabold text-[#7E90FE] rounded border-[#7E90FE] mr-4">{job.remote_or_onsite}</button>
                                    <button className="px-5 py-2 border font-extrabold text-[#7E90FE] rounded border-[#7E90FE] mr-4">{job.job_type}</button>

                                </div>
                                <div className="flex gap-4">
                                    <h4 className="flex gap-2  items-start font-medium text-[#757575]"> <span className="flex items-center gap-1 font-extrabold text-black"> <GrLocation className="text-lg"></GrLocation>Address:</span> {job.contact_information.address}</h4>

                                    <h4 className="flex items-center gap-2 font-medium text-[#757575]"><span className="flex items-center gap-1 font-extrabold text-black"><AiOutlineDollar className="text-xl"></AiOutlineDollar> Salary :</span>{job.salary}</h4>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJob;