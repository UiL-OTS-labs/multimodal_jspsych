var tut_learn_trial_info = [
    {
        target: "Tutorial1",
        target_image: "_image/Tutorial1i.png",
        target_audio: "_audio/Tutorial1s.wav",
        condition: "None",
        task_part: "Tutorial_learn"
    },
    {
        target: "Tutorial2",
        target_image: "_image/Tutorial2i.png",
        target_audio: "_audio/Tutorial2s.wav",
        condition: "None",
        task_part: "Tutorial_learn"
    },
    {
        target: "Tutorial3",
        target_image: "_image/Tutorial3i.png",
        target_audio: "_audio/Tutorial3s.wav",
        condition: "None",
        task_part: "Tutorial_learn"
    }
];

var tut_pract_trial_info = [
    {
        target: "Tutorial1",
        target_image: "_image/Tutorial1i.png",
        target_audio: "_audio/Tutorial1s.wav",
        other_im_a:"_image/Tutorial2i.png",
        other_im_b:"_image/Tutorial3i.png",
        choices:["Tutorial1","Tutorial2","Tutorial3"],
        correct_response:0,
        condition: "None",
        task_part: "Tutorial_pract"
    },
    {
        target: "Tutorial2",
        target_image: "_image/Tutorial2i.png",
        target_audio: "_audio/Tutorial2s.wav",
        other_im_a:"_image/Tutorial1i.png",
        other_im_b:"_image/Tutorial3i.png",
        choices:["Tutorial1","Tutorial2","Tutorial3"],
        correct_response: 1,
        condition: "None",
        task_part: "Tutorial_pract"
    },
    {
        target: "Tutorial3",
        target_image: "_image/Tutorial3i.png",
        target_audio: "_audio/Tutorial3s.wav",
        other_im_a:"_image/Tutorial1i.png",
        other_im_b:"_image/Tutorial2i.png",
        choices:["Tutorial1","Tutorial2","Tutorial3"],
        correct_response: 2,
        condition: "None",
        task_part: "Tutorial_pract"
    }
];


var learn_trial_info_one = [
    {
        target: "a1",
        target_image: "_image/_a1i.png",
        target_audio: "_audio/_a1s.wav",
        other_im_a:"_image/_b2i.png",
        other_im_b:"_image/_c3i.png",
        choices:["_a1","_b2","_c3"],
        correct_response:0,
        condition: "Tone 1",
        task_part: "test_learn"
    },
    {
        target: "b2",
        target_image: "_image/_b2i.png",
        target_audio: "_audio/_b2s.wav",
        other_im_a:"_image/_a1i.png",
        other_im_b:"_image/_c3i.png",
        choices:["_a1","_b2","_c3"],
        correct_response:1,
        condition: "Tone 2",
        task_part: "test_learn"
    },
    {
        target: "c3",
        target_image: "_image/_c3i.png",
        target_audio: "_audio/_c3s.wav",
        other_im_a:"_image/_b2i.png",
        other_im_b:"_image/_a1i.png",
        choices:["_a1","_b2","_c3"],
        correct_response:2,
        condition: "Tone 3",
        task_part: "test_learn"
    }
];

    var learn_trial_info_two = [
    {
        target: "c2",
        target_image: "_image/_c2i.png",
        target_audio: "_audio/_c2s.wav",
        other_im_a:"_image/_b1i.png",
        other_im_b:"_image/_a3i.png",
        choices:["_a3","_b1","_c2"],
        correct_response:2,
        condition: "Tone 2",
        task_part: "test_learn"
    },
    {
        target: "b1",
        target_image: "_image/_b2i.png",
        target_audio: "_audio/_b2s.wav",
        other_im_a:"_image/_a3i.png",
        other_im_b:"_image/_c3i.png",
        choices:["_a3","_b1","_c2"],
        correct_response:1,
        condition: "Tone 1",
        task_part: "test_learn"
    },
    {
        target: "a3",
        target_image: "_image/_a3i.png",
        target_audio: "_audio/_a3s.wav",
        other_im_a:"_image/_b1i.png",
        other_im_b:"_image/_c2i.png",
        choices:["_a3","_b1","_c2"],
        correct_response:0,
        condition: "Tone 3",
        task_part: "test_learn"
    }
];

//A1p, A2p, A3p (ma) 
//B1p, B2p, B3p (yi)
//C1p, C2p, C3p (ne)

var nine_trial_info_neutral = [
    {
        target: "_a1",
        target_image: "_image/_a1i.png",
        target_audio: "_audio/_a1s.wav",
        target_video: "_video/ma1n.mp4",
        other_im_1:"_image/_a2i.png",
        other_im_2:"_image/_a3i.png",
        other_im_3:"_image/_b1i.png",
        other_im_4:"_image/_b2i.png",
        other_im_5:"_image/_b3i.png",
        other_im_6:"_image/_c1i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:0,
        condition: "Neutral Tone 1",
        task_part: "test_learn_nine"
    },
    {
        target: "_a2",
        target_image: "_image/_a2i.png",
        target_audio: "_audio/_a2s.wav",
        target_video: "_video/ma2n.mp4",
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a3i.png",
        other_im_3:"_image/_b1i.png",
        other_im_4:"_image/_b2i.png",
        other_im_5:"_image/_b3i.png",
        other_im_6:"_image/_c1i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:1,
        condition: "Neutral Tone 2",
        task_part: "test_learn_nine"
    },
    {
        target: "_a3",
        target_image: "_image/_a3i.png",
        target_audio: "_audio/_a3s.wav",
        target_video: "_video/ma4n.mp4",
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_b1i.png",
        other_im_4:"_image/_b2i.png",
        other_im_5:"_image/_b3i.png",
        other_im_6:"_image/_c1i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:2,
        condition: "Neutral Tone 4",
        task_part: "test_learn_nine"
    },  
    {  
        target: "_b1",
        target_image: "_image/_b1i.png",
        target_audio: "_audio/_b1s.wav",
        target_video: "_video/yi1n.mp4",        
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_a3i.png",
        other_im_4:"_image/_b2i.png",
        other_im_5:"_image/_b3i.png",
        other_im_6:"_image/_c1i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:3,
        condition: "Neutral Tone 1",
        task_part: "test_learn_nine"
    },
    {
        target: "_b2",
        target_image: "_image/_b2i.png",
        target_audio: "_audio/_b2s.wav",
        target_video: "_video/yi2n.mp4", 
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_a3i.png",
        other_im_4:"_image/_b1i.png",
        other_im_5:"_image/_b3i.png",
        other_im_6:"_image/_c1i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:4,
        condition: "Neutral Tone 2",
        task_part: "test_learn_nine"
    },
    {
        target: "_b3",
        target_image: "_image/_b3i.png",
        target_audio: "_audio/_b3s.wav",
        target_video: "_video/yi4n.mp4", 
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_a3i.png",
        other_im_4:"_image/_b1i.png",
        other_im_5:"_image/_b2i.png",
        other_im_6:"_image/_c1i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:5,
        condition: "Tone 4",
        task_part: "test_learn_nine"
    },
    {  
        target: "_c1",
        target_image: "_image/_c1i.png",
        target_audio: "_audio/_c1s.wav",
        target_video: "_video/ne1n.mp4", 
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_a3i.png",
        other_im_4:"_image/_b1i.png",
        other_im_5:"_image/_b2i.png",
        other_im_6:"_image/_b3i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:6,
        condition: "Neutral Tone 1",
        task_part: "test_learn_nine"
    },
    {
        target: "_c2",
        target_image: "_image/_c2i.png",
        target_audio: "_audio/_c2s.wav",
        target_video: "_video/ne2n.mp4",        
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_a3i.png",
        other_im_4:"_image/_b1i.png",
        other_im_5:"_image/_b2i.png",
        other_im_6:"_image/_b31i.png",
        other_im_7:"_image/_c1i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:7,
        condition: "Neutral Tone 2",
        task_part: "test_learn_nine"
    },
    {
        target: "_c3",
        target_image: "_image/_c3i.png",
        target_audio: "_audio/_c3s.wav",
        target_video: "_video/ne4n.mp4", 
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_a3i.png",
        other_im_4:"_image/_b1i.png",
        other_im_5:"_image/_b2i.png",
        other_im_6:"_image/_b3i.png",
        other_im_7:"_image/_c1i.png",
        other_im_8:"_image/_c2i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:8,
        condition: "Netral Tone 4",
        task_part: "test_learn_nine"
    }   
];

var nine_trial_info_emotional = [
    {
        target: "_a1",
        target_image: "_image/_a1i.png",
        target_audio: "_audio/_a1s.wav",
        target_video: "_video/ma1h.mp4",
        other_im_1:"_image/_a2i.png",
        other_im_2:"_image/_a3i.png",
        other_im_3:"_image/_b1i.png",
        other_im_4:"_image/_b2i.png",
        other_im_5:"_image/_b3i.png",
        other_im_6:"_image/_c1i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:0,
        condition: "Emotional Tone 1",
        task_part: "test_learn_nine"
    },
    {
        target: "_a2",
        target_image: "_image/_a2i.png",
        target_audio: "_audio/_a2s.wav",
        target_video: "_video/ma2h.mp4",
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a3i.png",
        other_im_3:"_image/_b1i.png",
        other_im_4:"_image/_b2i.png",
        other_im_5:"_image/_b3i.png",
        other_im_6:"_image/_c1i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:1,
        condition: "Emotional Tone 2",
        task_part: "test_learn_nine"
    },
    {
        target: "_a3",
        target_image: "_image/_a3i.png",
        target_audio: "_audio/_a3s.wav",
        target_video: "_video/ma4h.mp4",
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_b1i.png",
        other_im_4:"_image/_b2i.png",
        other_im_5:"_image/_b3i.png",
        other_im_6:"_image/_c1i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:2,
        condition: "Emotional Tone 4",
        task_part: "test_learn_nine"
    },  
    {  
        target: "_b1",
        target_image: "_image/_b1i.png",
        target_audio: "_audio/_b1s.wav",
        target_video: "_video/yi1h.mp4",        
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_a3i.png",
        other_im_4:"_image/_b2i.png",
        other_im_5:"_image/_b3i.png",
        other_im_6:"_image/_c1i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:3,
        condition: "Emotional Tone 1",
        task_part: "test_learn_nine"
    },
    {
        target: "_b2",
        target_image: "_image/_b2i.png",
        target_audio: "_audio/_b2s.wav",
        target_video: "_video/yi2h.mp4", 
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_a3i.png",
        other_im_4:"_image/_b1i.png",
        other_im_5:"_image/_b3i.png",
        other_im_6:"_image/_c1i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:4,
        condition: "Emotional Tone 2",
        task_part: "test_learn_nine"
    },
    {
        target: "_b3",
        target_image: "_image/_b3i.png",
        target_audio: "_audio/_b3s.wav",
        target_video: "_video/yi4h.mp4", 
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_a3i.png",
        other_im_4:"_image/_b1i.png",
        other_im_5:"_image/_b2i.png",
        other_im_6:"_image/_c1i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:5,
        condition: "Emotional Tone 4",
        task_part: "test_learn_nine"
    },
    {  
        target: "_c1",
        target_image: "_image/_c1i.png",
        target_audio: "_audio/_c1s.wav",
        target_video: "_video/ne1h.mp4", 
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_a3i.png",
        other_im_4:"_image/_b1i.png",
        other_im_5:"_image/_b2i.png",
        other_im_6:"_image/_b3i.png",
        other_im_7:"_image/_c2i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:6,
        condition: "Emotional Tone 1",
        task_part: "test_learn_nine"
    },
    {
        target: "_c2",
        target_image: "_image/_c2i.png",
        target_audio: "_audio/_c2s.wav",
        target_video: "_video/ne2h.mp4",        
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_a3i.png",
        other_im_4:"_image/_b1i.png",
        other_im_5:"_image/_b2i.png",
        other_im_6:"_image/_b31i.png",
        other_im_7:"_image/_c1i.png",
        other_im_8:"_image/_c3i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:7,
        condition: "Emotional Tone 2",
        task_part: "test_learn_nine"
    },
    {
        target: "_c3",
        target_image: "_image/_c3i.png",
        target_audio: "_audio/_c3s.wav",
        target_video: "_video/ne4h.mp4", 
        other_im_1:"_image/_a1i.png",
        other_im_2:"_image/_a2i.png",
        other_im_3:"_image/_a3i.png",
        other_im_4:"_image/_b1i.png",
        other_im_5:"_image/_b2i.png",
        other_im_6:"_image/_b3i.png",
        other_im_7:"_image/_c1i.png",
        other_im_8:"_image/_c2i.png",
        choices:["_a1","_a2","_a3","_b1","_b2","_b3","_c1","_c2","_c3"],
        correct_response:8,
        condition: "Emotional Tone 4",
        task_part: "test_learn_nine"
    }   
];

//unsure if this should be a good place for save data, but let's see.
function saveData() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'write_data.php'); // change 'write_data.php' to point to php script.
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if(xhr.status == 200){
      var response = JSON.parse(xhr.responseText);
      console.log(response.success);
    }
  };
  xhr.send(jsPsych.data.get().json());
}




