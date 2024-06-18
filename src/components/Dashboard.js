import React from 'react';
import HomeIcon from '../images/homeicon.svg';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import homeicon from '../images/homeicon.svg';
import wifi from '../images/wifi.svg';
import wifi2 from '../images/wifi2.svg';
import wifi3 from '../images/wifi3.svg';
import wifi4 from '../images/wifi4.svg';
import calendaricon from '../images/calendar.svg';
import plus from '../images/plus.svg';
import minus from '../images/minus.svg';
import worldmap from '../images/worldmap.png';

function Dashboard() {
    return (<>
         <div className="div">
  <div className="div-2">
    <div className="div-3">
      <div className="div-4">
        <div className="div-5">
          <img loading="lazy" src={homeicon} className="img" />
        </div>
      </div>
      <div className="div-6">
        <div className="div-7">dashboard</div>
        <div className="div-8" />
      </div>
      <div className="div-9">reports</div>
      <div className="div-10">user management</div>
      <div className="div-11">site management</div>
    </div>
    <div className="div-12">
      <div className="div-13">
        <div className="div-14">
          <div className="div-15">
            <div className="div-16" />
          </div>
        </div>
        <div className="div-17">MLT</div>
      </div>
    </div>
  </div>
  <div className="div-18">
    <div className="div-19">Dashboard</div>
    <div className="div-20">
      <div className="div-21">
        <div className="div-22">country</div>
        
          <select  className="div-23">
            <option>Global</option>
            </select>
        </div>
      <div className="div-25">
        <div className="div-26">event type</div>
        <select  className="div-23">
            <option>All</option>
            </select>
      </div>
      <div className="div-29">
        <div className="div-30">event format</div>
        <select  className="div-23">
            <option>All</option>
            </select>
      </div>
      <div className="div-33">
        <div className="div-34">associates</div>
        <select  className="div-23">
            <option>Global</option>
            </select>
      </div>
      <div className="div-37">
        <div className="div-38">date range</div>
        <input type='date' className='div-39'></input>
      </div>
    </div>
  </div>
  <div className="div-41">
    <div className="div-42">
      <div className="column">
        <div className="div-43">
          <div className="div-44">
            <img loading="lazy" src={wifi} className="img-7" />
            <div className="div-45">virtual events</div>
          </div>
          <div className="div-46">
            <div className="div-47">
              <img loading="lazy" src={wifi2} className="img-8" />
              <div className="div-48">
                <div className="div-49">MGS Leadership</div>
                <div className="div-50">Virtual</div>
              </div>
            </div>
            <div className="div-51">
              <img loading="lazy" src={wifi2} className="img-9" />
              <div className="div-52">
                <div className="div-53">NextGen Presentation</div>
                <div className="div-54">Virtual</div>
              </div>
            </div>
            <div className="div-55">
              <img loading="lazy" src={wifi4} className="img-10" />
              <div className="div-56">
                <div className="div-57">MELE Trainees</div>
                <div className="div-58">Virtual</div>
              </div>
            </div>
            <div className="div-59">
              <img loading="lazy" src={wifi3} className="img-11" />
              <div className="div-60">
                <div className="div-61">Q1 MVA Broadcast</div>
                <div className="div-62">McLean, Virginia</div>
              </div>
            </div>
            <div className="div-63">
              <img loading="lazy" src={wifi3} className="img-12" />
              <div className="div-64">
                <div className="div-65">Q2 MVA Broadcast</div>
                <div className="div-66">McLean, Virginia</div>
              </div>
            </div>
            <div className="div-67">
              <img loading="lazy" src={wifi3} className="img-13" />
              <div className="div-68">
                <div className="div-69">Q3 GIC Broadcast</div>
                <div className="div-70">Chicago, Illinois</div>
              </div>
            </div>
            <div className="div-71">
              <img loading="lazy" src={wifi3} className="img-14" />
              <div className="div-72">
                <div className="div-73">Q4 MVA Broadcast</div>
                <div className="div-74">McLean, Virginia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column-2">
        <div className="div-75">
          <img loading="lazy" srcSet={worldmap} className="img-15" />
          <div className="div-76">
            <div className="div-77">
              <div className="div-78">
                <div className="div-79">
                  <div className="div-80" />
                </div>
                <div className="div-81">
                  <div className="div-82" />
                </div>
              </div>
              <div className="div-83">
                <div className="div-84">
                  <div className="div-85" />
                </div>
                <div className="div-86">
                  <div className="div-87" />
                </div>
              </div>
            </div>
            <div className="div-88">
              <div className="div-89" />
            </div>
          </div>
          <div className="div-90">
            <div className="div-91">
              <div className="div-92">
                <div className="div-93" />
              </div>
              <div className="div-94">
                <div className="div-95" />
              </div>
            </div>
            <div className="div-96">
              <div className="div-97">
                <div className="div-98" />
              </div>
              <div className="div-99">
                <div className="div-100">
                  <div className="div-101" />
                </div>
                <div className="div-102">
                  <div className="div-103" />
                </div>
              </div>
            </div>
            <div className="div-104">
              <div className="div-105">
                <div className="div-106" />
              </div>
              <div className="div-107">
                <div className="div-108">
                  <img loading="lazy" src={plus} className="img-16" />
                </div>
                <div className="div-109">
                  <img loading="lazy" src={minus} className="img-17" />
                </div>
              </div>
            </div>
            <div className="div-110">
              <div className="div-111" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="div-112">
    <div className="div-113">
      <div className="div-114">total events</div>
      <div className="div-115">36</div>
    </div>
    <div className="div-116">
      <div className="div-117">countries visited</div>
      <div className="div-118">13</div>
    </div>
    <div className="div-119">
      <div className="div-120">Total Associates at Events</div>
      <div className="div-121">9,000+</div>
    </div>
  </div>
  <div className="div-122">
    <div className="div-123">
      <div className="div-124">
        <div className="div-125">
          <div className="div-126">countries</div>
          <div className="div-127" />
        </div>
        <div className="div-128">associates</div>
        <div className="div-129">after visit</div>
      </div>
      <div className="div-130">
        <div className="div-131">Number of event on active selection</div>
        <div className="div-132">99</div>
      </div>
    </div>
    <div className="div-133">
      <div className="div-134">
        <div className="div-135">Country name</div>
        <div className="div-136">
          <div className="div-137" />
          <div className="div-138">99%</div>
        </div>
      </div>
      <div className="div-139">
        <div className="div-140">Country name</div>
        <div className="div-141">
          <div className="div-142" />
          <div className="div-143">99%</div>
        </div>
      </div>
      <div className="div-144">
        <div className="div-145">Country name</div>
        <div className="div-146">
          <div className="div-147" />
          <div className="div-148">99%</div>
        </div>
      </div>
      <div className="div-149">
        <div className="div-150">Country name</div>
        <div className="div-151">
          <div className="div-152" />
          <div className="div-153">99%</div>
        </div>
      </div>
      <div className="div-154">
        <div className="div-155">Country name</div>
        <div className="div-156">
          <div className="div-157" />
          <div className="div-158">99%</div>
        </div>
      </div>
      <div className="div-159">
        <div className="div-160">Country name</div>
        <div className="div-161">
          <div className="div-162" />
          <div className="div-163">99%</div>
        </div>
      </div>
      <div className="div-164">
        <div className="div-165">Country name</div>
        <div className="div-166">
          <div className="div-167" />
          <div className="div-168">99%</div>
        </div>
      </div>
      <div className="div-169">
        <div className="div-170">Country name</div>
        <div className="div-171">
          <div className="div-172" />
          <div className="div-173">99%</div>
        </div>
      </div>
      <div className="div-174">
        <div className="div-175">Country name</div>
        <div className="div-176">
          <div className="div-177" />
          <div className="div-178">99%</div>
        </div>
      </div>
      <div className="div-179">
        <div className="div-180">Country name</div>
        <div className="div-181">
          <div className="div-182" />
          <div className="div-183">99%</div>
        </div>
      </div>
      <div className="div-184">
        <div className="div-185">Country name</div>
        <div className="div-186">
          <div className="div-187" />
          <div className="div-188">99%</div>
        </div>
      </div>
      <div className="div-189">
        <div className="div-190">Country name</div>
        <div className="div-191">
          <div className="div-192" />
          <div className="div-193">99%</div>
        </div>
      </div>
      <div className="div-194">
        <div className="div-195">Country name</div>
        <div className="div-196">
          <div className="div-197" />
          <div className="div-198">99%</div>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
    );
}

export default Dashboard;
