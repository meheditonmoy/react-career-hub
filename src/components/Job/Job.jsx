import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="w-1/2" src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 border font-extrabold text-[#7E90FE] rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 border font-extrabold text-[#7E90FE] rounded border-[#7E90FE] mr-4">{job_type}</button>
                </div>
                <div className="my-4 flex gap-8 font-bold">
                    <h2 className="flex items-center"><FaLocationDot className="text-2xl mr-2"></FaLocationDot>{location}</h2>

                    <h2 className="flex items-center"><AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle>{salary}</h2>
                </div>
                <div className="card-actions ">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;