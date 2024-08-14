import { createContext, useState, useRef, useEffect } from "react";
import axios from 'axios';
import {POST_URL,EVENT_TYPE_URL,EVENT_FORMAT_URL,EVENT_LAST_VISIT_URL,
  EVENT_ASSOCIATE_URL,COUNTRY_CODE_URL,COUNTRY_URL,STATE_URL,CITY_URL,
  UPLOAD_COVER_URL,UPLOAD_BRIEF_URL,DOWNLOAD_BRIEF_URL,DELETE_URL,DOWNLOAD_ATTACH_URL,
  UPLOAD_ATTACH_URL,DOWNLOAD_ATTACH_LIST_URL,DELETE_BRIEF_URL,DELETE_ATTACH_URL,EVENT_USERS_URL,
  HISTORY_URL,ADD_COMMENTS_URL} from './ApiDetails.js'
const FormContext = createContext({});
export const FormProvider = ({ children }) => {

    const title = {
        0: 'Event',
        1: 'Schedule',
        2: 'Guests',
        3: 'History',
        4: 'Summary'
    }

    const [page, setPage] = useState(0)
    const [nonEditable, setNonEditable] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState([])
    const [errors, setErrors] = useState({})
    const [eventTypeList, setEventTypes] = useState([])
    const [eventFormatList, setEventFormat] = useState([])
    const [lastVisitList, setlastVisit] = useState([])
    const [associateAtEvent, setassociateAtEvent] = useState([])
    const [phoneCode, setphoneCode] = useState([])
    const [country, setcountry] = useState([])
    const [state, setstate] = useState([])
    const [city, setcity] = useState([])
    const [users, setUsers] = useState([])
    const [imageFile, setImageFile] = useState(null)
    const hiddenUploadImageFileInput = useRef(null);   
    const hiddenUploadBriefFileInput = useRef(null);  
    const hiddenAttachmentFileInput = useRef(null);  
    const attachments = useState([])
    const [suggestion, setSuggestions] = useState([]);
    const [input, setInput] = useState("");
    const [select, setSelect] = useState("");

    const [suggestionCoHost, setSuggestionsCoHost] = useState([]);
    const [inputCoHost, setInputCoHost] = useState("");
    const [selectCoHost, setSelectCoHost] = useState("");

    const [HistoryComment, setHistoryComment] = useState("");


// to capture the value on click
const selectSuggestionValue = (item) => {
 setSelect(item)
 eventFormData.requestedBy=item
 setSuggestions("")
 setInput("")
}

const selectSuggestionValueCoHost = (item) => {
  setSelectCoHost(item)
  eventFormData.eventCoHost=item
  setSuggestionsCoHost("")
  setInputCoHost("")
 }
 
  const handleUploadImageClick = event => {
    hiddenUploadImageFileInput.current.click();
  };

  const handleUploadBriefFileClick = event => {
    if (eventFormData.eventId === 0)
      alert("Please save the details before uploading the brief");
    else 
      hiddenUploadBriefFileInput.current.click();
  };

  const handleUploadAttachmentClick = event => {
    if (eventFormData.eventId === 0)
      alert("Please save the details before uploading the brief");
    else 
    hiddenAttachmentFileInput.current.click();
  };

  const onScheduleLoad =async() =>{
    if (eventFormData.eventId != 0)
    {
      const response = await axios.get(DOWNLOAD_ATTACH_LIST_URL+eventFormData.eventId);
      if(response.data.length!=0)
      {
        response.data.forEach(element => {
          axios.get(DOWNLOAD_ATTACH_URL+encodeURIComponent(element))
        .then(response => {
          createAttachmentLinks(response.config.url,element)
          
        })
        .catch(error => {
          console.error('Error updating the details: ', error);
          alert("Error uploading attachment");
        });
          
        });
      }

    }
  }

  const handleCommentText =(e) =>{
    setHistoryComment(e.target.value)
  }

  const addComments = async () => {

    if (eventFormData.eventId === 0)
      alert("Please save the details before adding comments");
    else {
      let briefData = new FormData();
      briefData.append("EventId", eventFormData.eventId);
      briefData.append("Comments", HistoryComment);
      briefData.append("User", eventFormData.requestedBy);//eventFormData.eventId

      axios.post(ADD_COMMENTS_URL, briefData)
        .then(response => {
          if(response.data !=null)
          {
          setHistoryComment("")
          createHistoryElements(response.data.comments, response.data.date, response.data.user,response.data.userRole,true)
          }
          else
            alert("Error adding comments");
        })
        .catch(error => {
          console.error('Error updating the details: ', error);
          alert("Error uploading cover image");
        });

    }

  }

  const onHistoryLoad = async () => {
    if (eventFormData.eventId != 0) {
      const response = await axios.get(HISTORY_URL+eventFormData.eventId);
      if (response.data.length != 0) {
        response.data.forEach(element => {
          if (element.history != null)
            createHistoryElements(element.history, element.date, element.user,element.userRole,false)
          if (element.comments != null)
            createHistoryElements(element.comments, element.date, element.user,element.userRole,true)
        });

      };
    }

  }

  const createHistoryElements = (data,date,user,userRole,isComment) => {
    var ele = document.getElementById("History")
    //Date Div
    var dateDiv = document.createElement("div")
    dateDiv.className="form-group row mb-2 align-items-center"
    //date label
    var datelabel = document.createElement("label")
    datelabel.className="custom-font col-sm-2 col-form-label"
    datelabel.innerText= new Date(date).toLocaleDateString();
    //div user
    var userDiv = document.createElement("div")
    userDiv.className="col-sm-2 "
    var userStrong = document.createElement("strong")
    var userInput = document.createElement("input")
    userInput.type="text"
    userInput.className="custom-font-lt form-control-plaintext-cus form-control-plaintext"
    userInput.value=user
    userStrong.appendChild(userInput);
    //role
    var roleInput = document.createElement("input")
    roleInput.type="text"
    roleInput.className="custom-font-lt form-control-plaintext-cus form-control-plaintext"
    roleInput.value=userRole
    //comments
    var commentsDiv = document.createElement("div")
    commentsDiv.className="form-group row mb-2"
    var commentsDiv1 = document.createElement("div")
    commentsDiv1.className="col-sm-12 "
    var commentsInput = document.createElement("input")
    commentsInput.type="text"
    commentsInput.className="custom-font-lt form-control"
    commentsInput.value=data
    if(isComment)
      commentsInput.className="custom-font-lt form-control comment"
    commentsDiv1.appendChild(commentsInput)
    commentsDiv.appendChild(commentsDiv1)

    userDiv.appendChild(userStrong)
    userDiv.appendChild(roleInput)

    dateDiv.appendChild(datelabel)
    dateDiv.appendChild(userDiv)
    ele.appendChild(dateDiv)
    ele.appendChild(commentsDiv)

    
  }

  


  const createAttachmentLinks = (url,name) => {
    var ele = document.getElementById("SchAttList")
          var liEle = document.createElement("li");
         liEle.className ="list-group-item-custom list-group-item m-1 d-flex justify-content-between align-items-center"
        //  var span = document.createElement("span")
          var u = document.createElement("u")
          var a = document.createElement("a")
          a.href=url 
          a.innerHTML=name
          a.setAttribute('download',name);
          var close=document.createElement("button")
          close.innerHTML="X"
          close.style={ alignItems: 'right' }
          close.className="btn-custom btn btn-outline-primary "
          liEle.id=name
          close.onclick = () => (handleAttachmentDelete(encodeURIComponent(name),eventFormData.eventId));
          u.appendChild(a)
          liEle.appendChild(u);
          liEle.appendChild(close);
          ele.appendChild(liEle);
  }

  const handleAttachmentsUpload = (e) => {
    if (eventFormData.eventId === 0)
      alert("Please save the details before uploading the attachments");
    else
    {
    let attachData = new FormData();
      attachData.append("File", e.target.files[0]);
      attachData.append("EventId", eventFormData.eventId);//eventFormData.eventId
      const headers = {
        'Content-Type': 'multipart/form-data'
      }
      axios.post(UPLOAD_ATTACH_URL, attachData, { headers })
        .then(response => {
          //seteventFormData({ ...eventFormData, "IsImageCover": false })
          // eventFormData.IsImageCover=false;
          console.log("Brief Updated");
          
         createAttachmentLinks(URL.createObjectURL(e.target.files[0]),response.data)
          
        })
        .catch(error => {
          console.error('Error updating the details: ', error);
          alert("Error uploading attachment");
        });
      }
  };


  const handleDownloadBrief = async() => {
    if (eventFormData.eventId === 0)
      alert("Please save the details and upload brief before downloading the brief");
    else 
    {
    try {
      const response = await axios.get(DOWNLOAD_BRIEF_URL+eventFormData.eventId);
      if(response.data === "")
        alert("No exsisting brief to download");
      else
      {
      const element = document.createElement("a");
      element.href = response.config.url
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
      }
    } catch (error) {
      console.error('Error downloading', error);
    }
  }
      
  }


    const [eventFormData, setEventFormData] = useState({
        // Initialize your form data state here
        requestedBy: '',
        eventTitle: '',
        associateSegment: '',
        email: '',
        phone: '',
        eventDate: '',
        siteCode: '',
        countryName: '',
        stateName: '',
        cityName: '',
        eventVenueName: '',
        eventAddress: '',
        eventType: '',
        eventFormat: '',
        totalAttendees: '',
        schedule: {
            visitSummary: '',
            draftItinerary: ''
        },
        maxFamilyNum: false,
        familyNum: 0,
        specificFamilyMem: false,
        nameOfMem: '',
        IsScheduleChange: false,
        lastVisit: '',
        associateAtEvent:'',
        IsImageCover:false,
        eventId:0
    });
    const {
        requestedBy,
        eventTitle,
        associateSegment,
        email,
        phone,
        eventDate,
        siteCode,
        countryName,
        stateName,
        cityName,
        eventVenueName,
        eventAddress,
        eventType,
        eventFormat,
        totalAttendees,
        lastVisit,
        ...requiredInputs } = eventFormData

    const handleChange = e => {
        const type = e.target.type

        var name = e.target.name

        var value =  e.target.value

      //  const { fname, value , checked } = e.target;

  let errorMessage = '';

  // Perform validation for each field
  if (name === 'requestedBy' && value.trim() === '') {
    errorMessage = 'Requested by is required';
  } else if (name === 'eventTitle' && value.trim() === '') {
    errorMessage = 'Event title is required';
  } else if (name === 'associateSegment' && value.trim() === '') {
    errorMessage = 'Associate segment is required';
  } else if (name === 'email' && value.trim() === '') {
    errorMessage = 'Email is required';
  } else if (name === 'phone' && value.trim() === '') {
    errorMessage = 'Phone is required';
  } else if (name === 'eventDate' && value.trim() === '') {
    errorMessage = 'Event date is required';
  } else if (name === 'siteCode' && value.trim() === '') {
    errorMessage = 'Site code is required';
  } else if (name === 'countryName' && value.trim() === '') {
    errorMessage = 'Country name is required';
  } else if (name === 'stateName' && value.trim() === '') {
    errorMessage = 'State name is required';
  } else if (name === 'cityName' && value.trim() === '') {
    errorMessage = 'City name is required';
  } else if (name === 'eventVenueName' && value.trim() === '') {
    errorMessage = 'Event venue name is required';
  } else if (name === 'eventAddress' && value.trim() === '') {
    errorMessage = 'Event address is required';
  } else if (name === 'eventType' && value.trim() === '') {
    errorMessage = 'Event type is required';
  } else if (name === 'eventFormat' && value.trim() === '') {
    errorMessage = 'Event format is required';
  } else if (name === 'totalAttendees' && value.trim() === '') {
    errorMessage = 'Total attendees is required';
  } else if (name === 'email' && !(/^\S+@\S+\.\S+$/.test(value))) {
    errorMessage = 'Please enter a valid email address';
  } else if (name === 'phone' && !(/^[0-9]{10}$/.test(value))) {
    errorMessage = 'Please enter a valid phone number';
  } else if (name === 'lastVisit' && value.trim() === '') {
    errorMessage = 'Please select a range for last visit';
  } 

  // } else if (name === 'estimatedMars' && value.trim() === '') {
  //   errorMessage = 'Please select a range for estimated mars';
  // }

  setErrors({ ...errors, [name]: errorMessage });

            if (name == "eventType" || name == "eventFormat" || name == "lastVisit" || name == "cityName" ) {
              value= e.target.options[e.target.selectedIndex].text 
                    
                  }
                  else if(name == "countryName")
                  {
                    value = e.target.options[e.target.selectedIndex].text 
                   
                     // useEffect(() => {
                        fetchState(e.target.options[e.target.selectedIndex].text);
                      //}, []); 
                  }
                  else if(name == "stateName")
                    {
                      value= e.target.options[e.target.selectedIndex].text 
                    //  useEffect(() => {
                        fetchCity(e.target.options[e.target.selectedIndex].text);
                    //  }, []); 
                    } else if (name === 'associateAtEvent') {
                      if (e.target.checked) {
                        setSelectedOptions([...selectedOptions, { value: e.target.value }]);
                      }
                      else {
                        setSelectedOptions(selectedOptions.filter(item => item.value !== e.target.value));
                
                      }
                      value = selectedOptions.map(x => x.value) 
                    
                  } else if(name === 'isDateFlexible')
                    {
                      value= e.target.checked
                      
                    } 
                    else if(name === 'maxFamilyNum')
                      {
                        value= e.target.checked
                        e.target.checked
                          ?document.getElementById("familyNum").hidden=false
                          :document.getElementById("familyNum").hidden=true;
                        
                        
                      } 
                      else if(name === 'specificFamilyMem')
                        {
                          value= e.target.checked
                          e.target.checked
                          ?document.getElementById("nameOfMem").hidden=false
                          :document.getElementById("nameOfMem").hidden=true;
                          
                        } 
                        else if(name === 'isDateFlexible')
                          {
                            value= e.target.checked
                           
                            
                          } 
                          else if(name === 'imageFile')
                          {
                            setEventFormData({ ...eventFormData, "IsImageCover": false })
                            setImageFile(e.target.files[0]);
                            const bgUrl = URL.createObjectURL(e.target.files[0])//.replace('blob:','');
                            document.getElementById('hdrDiv').style.backgroundImage = 'url('+ bgUrl +')';
     
                            name ="IsImageCover"
                            value = true
                              
                          }
                          else if(name == 'requestedBy')
                          {
                            let value = e.target.value;
                            let matches = [];
                        
                            if (value.length >= 1) {
                              const regex = new RegExp(`${value.toLowerCase()}`);
                              matches = users.filter((item) => regex.test(item.toLowerCase()));
                            }
                            setSuggestions(matches);
                            setInput(value)
                          }
                          else if(name=="eventCoHost")
                            {
                              let value = e.target.value;
                              let matches = [];
                          
                              if (value.length >= 1) {
                                const regex = new RegExp(`${value.toLowerCase()}`);
                                matches = users.filter((item) => regex.test(item.toLowerCase()));
                              }
                              setSuggestionsCoHost(matches);
                              setInputCoHost(value)
                            }
                  else {
                    value= e.target.value
                    
                    }
                    setEventFormData(prevData => ({
                        ...prevData,
                        [name]: value
                    }))

      console.log(eventFormData);   
      console.log(value);   

    }
    const handleScheduleAgendaChange = (e) => {
      eventFormData.schedule.visitSummary = e;
      eventFormData.IsScheduleChange = true;
  
    };
    const handleScheduleItenaryChange = (e) => {
      eventFormData.schedule.draftItinerary = e;
      eventFormData.IsScheduleChange = true;
  
    };

    const fetchEventTypes = async () => {
        try {
          const response = await axios.get(EVENT_TYPE_URL);
          console.log("Resonse of EventType is", response);
          setEventTypes(response.data);
        } catch (error) {
          console.error('Error fetching event types:', error);
        }
      };
      
      const fetchEventFormat = async () => {
        try {
          const response = await axios.get(EVENT_FORMAT_URL);
          console.log("Resonse of EventFormat is", response);
          setEventFormat(response.data);
        } catch (error) {
          console.error('Error fetching event types:', error);
        }
      };

      const fetchUsers = async () => {
        try {
          const response = await axios.get(EVENT_USERS_URL);
          console.log("Resonse of EventFormat is", response);
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching event types:', error);
        }
      };
      
      const fetchLastVisit = async () => {
        try {
          const response = await axios.get(EVENT_LAST_VISIT_URL);
          console.log("Resonse of Interview Bwtween Last Visit is", response);
          setlastVisit(response.data);
        } catch (error) {
          console.error('Error fetching event types:', error);
        }
      };
      
      const fetchAssociateAtEvent = async () => {
        try {
          const response = await axios.get(EVENT_ASSOCIATE_URL);
          console.log("Resonse of Interview Bwtween Last Visit is", response);
          setassociateAtEvent(response.data);
        } catch (error) {
          console.error('Error fetching event types:', error);
        }
      };
      const fetchPhonecode = async () => {
        try {
          const response = await axios.get(COUNTRY_CODE_URL);
          console.log("Resonse of EventType is", response);
          setphoneCode(response.data);
        } catch (error) {
          console.error('Error fetching event types:', error);
        }
      };
      const fetchCountry = async () => {
        try {
          const response = await axios.get(COUNTRY_URL);
          console.log("Resonse of EventType is", response);
          setcountry(response.data);
        } catch (error) {
          console.error('Error fetching event types:', error);
        }
      };
      const fetchState = async (countryName) => {
        try {
          const response = await axios.get(STATE_URL + countryName);
          console.log("Resonse of EventType is", response);
          setstate(response.data);
        } catch (error) {
          console.error('Error fetching event types:', error);
        }
      };
      const fetchCity = async (stateName) => {
        try {
          const responseCity = await axios.get(CITY_URL + stateName);
          console.log("Resonse of EventType is", responseCity);
          setcity(responseCity.data);
        } catch (error) {
          console.error('Error fetching event types:', error);
        }
      };

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const handlepageChange = (val) => {
       
        setPage(val);
        if(val===1)
        {
          onScheduleLoad()
        }
        if(val===3)
        {
          onHistoryLoad()
        }
       
        console.log(page);
    }

    function handleSubmit()  {

  
      eventFormData.eventStatus = "Draft";
      let newErrors = {};
    
      // Basic validations
      if (!eventFormData.requestedBy) newErrors.requestedBy = 'Requested by is required';
      if (!eventFormData.eventTitle) newErrors.eventTitle = 'Event title is required';
      if (!eventFormData.associateSegment) newErrors.associateSegment = 'Associate segment is required';
      if (!eventFormData.email) newErrors.email = 'Email is required';
      if (!eventFormData.phone) newErrors.phone = 'Phone is required';
      if (!eventFormData.eventDate) newErrors.eventDate = 'Event date is required';
      if (!eventFormData.siteCode) newErrors.siteCode = 'Site code is required';
      if (!eventFormData.countryName) newErrors.countryName = 'Country name is required';
      if (!eventFormData.stateName) newErrors.stateName = 'State name is required';
      if (!eventFormData.cityName) newErrors.cityName = 'City name is required';
      if (!eventFormData.eventVenueName) newErrors.eventVenueName = 'Event venue name is required';
      if (!eventFormData.eventAddress) newErrors.eventAddress = 'Event address is required';
      if (!eventFormData.eventType) newErrors.eventType = 'Event type is required';
      if (!eventFormData.eventFormat) newErrors.eventFormat = 'Event format is required';
      if (!eventFormData.lastVisit) newErrors.lastVisit = 'LastVisit is required';
      if (!eventFormData.totalAttendees) newErrors.totalAttendees = 'Total attendees is required';
      if (eventFormData.maxFamilyNum && eventFormData.familyNum === 0) {
        newErrors.familyNum = 'Please specify the maximum family number';
      } 
      if (eventFormData.specificFamilyMem && eventFormData.nameOfMem === '') {
        newErrors.nameOfMem = 'Please specify the maximum family number';
      }
      //if (!eventFormData.estimatedMars) newErrors.estimatedMars = 'Estimated Mars is required';
    
      // Email validation
      const emailPattern = /^\S+@\S+\.\S+$/;
      if (eventFormData.email && !emailPattern.test(eventFormData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    
      // Phone validation
      const phonePattern = /^[0-9]{10}$/;
      if (eventFormData.phone && !phonePattern.test(eventFormData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    
      setErrors(newErrors);
    
      if (Object.keys(newErrors).length === 0) {
        // Proceed with form submission
          axios.post(POST_URL, eventFormData)
              .then(response => {
                  console.log('Details updated successfully: ', response.data);
                  //seteventId(response.data);
                  eventFormData.id = response.data[0];
                  eventFormData.eventId = response.data[1];
                  eventFormData.IsScheduleChange=false;
                  if(eventFormData.IsImageCover)
                    {
                      let formData = new FormData();
                      formData.append("File", imageFile);
                      formData.append("EventId", response.data[1]);//eventFormData.eventId
                      const headers = {
                      'Content-Type': 'multipart/form-data'
                      }
                      axios.post(UPLOAD_COVER_URL, formData,{headers})
                            .then(response => {
                              eventFormData.IsImageCover = false;
                              //seteventFormData({ ...eventFormData, "IsImageCover": false })
                             // eventFormData.IsImageCover=false;
                                alert("Cover image Updated");
                            })
                            .catch(error => {
                                console.error('Error updating the details: ', error);
                                alert("Error uploading cover image");
                            });
                    }
                  
                 
                  alert("Details Updated");
              })
              .catch(error => {
                  console.error('Error updating the details: ', error);
                  alert("Error updating the details");
              });
      }
      
    };

  const handleBriefUpload = (e) => {
    if (eventFormData.eventId === 0)
      alert("Please save the details before uploading the brief");
    else {
      let briefData = new FormData();
      briefData.append("File", e.target.files[0]);
      briefData.append("EventId", eventFormData.eventId);//eventFormData.eventId
      const headers = {
        'Content-Type': 'multipart/form-data'
      }
      axios.post(UPLOAD_BRIEF_URL, briefData, { headers })
        .then(response => {
          //seteventFormData({ ...eventFormData, "IsImageCover": false })
          // eventFormData.IsImageCover=false;
          console.log("Brief Updated");
        })
        .catch(error => {
          console.error('Error updating the details: ', error);
          alert("Error uploading cover image");
        });

    }

  };

  const handleBriefDelete = async() => {
    if (eventFormData.eventId === 0)
      alert("No details saved");
    else {
      try {
        const response = await axios.delete(DELETE_BRIEF_URL+eventFormData.eventId);
        if(response.data === true)
          alert("Brief deleted");
        else
        {
          alert("Error deleting Brief");
        }
      } catch (error) {
        console.error('Error deleting', error);
      }
    }

  };

  const handleAttachmentDelete = async(name,eventId) => {
    
      try {
        const response = await axios.delete(DELETE_ATTACH_URL+eventId+"/"+name);
        if(response.data === true)
        {
          var ele= document.getElementById(decodeURIComponent(name))
          ele.remove()
        }
        else
        {
          alert("Error deleting Brief");
        }
      } catch (error) {
        console.error('Error deleting', error);
      }

  };

  const handleDeleteDraft = async() =>{
    if (eventFormData.eventId === 0)
      alert("No details saved");
    else {
      try {
        const response = await axios.delete(DELETE_URL+eventFormData.eventId);
        if(response.data > 0)
        {
          alert("Brief deleted");
          window.location.reload(false);
          
        }
        else
        {
          alert("Error deleting Brief");
        }
      } catch (error) {
        console.error('Error deleting', error);
      }
    }
  }
  const handleNonEditable = () => {
  
    var form = document.getElementById("createNewRequestForm");
  var elements = form.elements;
  var editor = document.getElementsByClassName("ql-editor")
  for (var i = 0, len = elements.length; i < len; ++i) {
      if(elements[i].type=='select-one' || elements[i].type =='checkbox')
      {
        elements[i].disabled=true;
      }
      if(elements[i].type=='text')
      {
        elements[i].readOnly = true;
      }
      if(elements[i].id=='closeEdit'||elements[i].id=='deleteDraft'||elements[i].id=='saveChanges'
        ||elements[i].id=='sendValidation'||elements[i].id=='uploadBrief'
        ||elements[i].id=='deleteBrief'||elements[i].id=='uploadAttachment'
        ||elements[i].id=='coverImageUpload'
      )
      {
        elements[i].disabled = true;
      }
      
  }
  if(editor !=null)
  {
    for (var i = 0, len = editor.length; i < len; ++i) {
      editor[i].contentEditable =false;
    }
  }
  setNonEditable(true)
  };

  const handleSendForValidation = (event) => {
    event.preventDefault();
  
  };
  


    return (
        <FormContext.Provider value={{ 
          title, page, setPage, eventFormData, setEventFormData, canSubmit,handleChange,
           handlepageChange,setErrors,errors,fetchEventTypes,fetchEventFormat,fetchLastVisit,
           fetchAssociateAtEvent,fetchPhonecode,fetchCountry,fetchState,fetchCity,eventTypeList,
           eventFormatList,lastVisitList,associateAtEvent,phoneCode,country,state,city,
           handleScheduleAgendaChange,handleScheduleItenaryChange,handleSubmit,
           handleUploadImageClick,hiddenUploadImageFileInput,handleBriefUpload,
           handleUploadBriefFileClick,hiddenUploadBriefFileInput,handleDownloadBrief,
           hiddenAttachmentFileInput,handleUploadAttachmentClick,handleAttachmentsUpload,
           handleBriefDelete,handleAttachmentDelete,handleDeleteDraft,handleNonEditable,
           nonEditable,handleSendForValidation,fetchUsers,users,suggestion,selectSuggestionValue,
           selectSuggestionValueCoHost,suggestionCoHost,HistoryComment,setHistoryComment,handleCommentText,
           addComments
          }}>
            {children}
        </FormContext.Provider>
    )
}
export default FormContext 