
import React from 'react';
import './connectToAws.css';

const connectToAws = () => {
  
  return (

<div className='container-fluid' >
       
<div 
className='row col-md-12'>
    <div>
        <label>Access Key ID</label>
        <input type="text" name="accessid" id="accessid" className='form-control' required />
    </div>
    <div className='form-group'>
        <label>Secret Access Key</label>
        <input type="text " name="accesskey " id="accesskey " className='form-control' required />
    </div>


    
<div className="form-group" >
                            <label>AWS Region</label>
                            <select className="form-control" id="region" name="region" required>
                                <option value="" selected disabled>Select Region</option>
                                <option value="us-east-1">US East (N. Virginia)</option>
                                <option value="us-east-2">US East (Ohio)</option>
                                <option value="us-west-1">US West (N. California)</option>
                                <option value="us-west-2">US West (Oregon)</option>
                            </select>
                        </div>

</div>
<button type="button" className='btn btn-primary'>Subbmit</button>
</div>

    
);
};



export default connectToAws;