const getStorageJobApplication  = ()=>{
    const storageJob = localStorage.getItem('job-applications');
    if(storageJob){
        return JSON.parse(storageJob);
    }
    return [];
}

const saveJobApplication = id =>{
    const storageJob  = getStorageJobApplication ();
    const exists = storageJob.find(jobId => jobId === id);
    if (!exists){
        storageJob.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storageJob))
    }
}

export {getStorageJobApplication ,saveJobApplication};