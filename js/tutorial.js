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

//A1p, A2p, A3p, B1p, B2p, B3p, C1p, C2p, C3p
var nine_trial_info = [
    {
        target: "a1",
        target_image: "_image/_a1i.png",
        target_audio: "_audio/_a1s.wav",
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
        condition: "Tone 1",
        task_part: "test_learn_nine"
    },
    {
        target: "a2",
        target_image: "_image/_a2i.png",
        target_audio: "_audio/_a2s.wav",
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
        condition: "Tone 2",
        task_part: "test_learn_nine"
    },
    {
        target: "a3",
        target_image: "_image/_a3i.png",
        target_audio: "_audio/_a3s.wav",
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
        condition: "Tone 4",
        task_part: "test_learn_nine"
    },  
    {  
        target: "b1",
        target_image: "_image/_b1i.png",
        target_audio: "_audio/_b1s.wav",
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
        condition: "Tone 1",
        task_part: "test_learn_nine"
    },
    {
        target: "b2",
        target_image: "_image/_b2i.png",
        target_audio: "_audio/_b2s.wav",
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
        condition: "Tone 2",
        task_part: "test_learn_nine"
    },
    {
        target: "b3",
        target_image: "_image/_b3i.png",
        target_audio: "_audio/_b3s.wav",
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
        target: "c1",
        target_image: "_image/_c1i.png",
        target_audio: "_audio/_c1s.wav",
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
        condition: "Tone 1",
        task_part: "test_learn_nine"
    },
    {
        target: "c2",
        target_image: "_image/_c2i.png",
        target_audio: "_audio/_c2s.wav",
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
        condition: "Tone 2",
        task_part: "test_learn_nine"
    },
    {
        target: "c3",
        target_image: "_image/_c3i.png",
        target_audio: "_audio/_c3s.wav",
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
        condition: "Tone 4",
        task_part: "test_learn_nine"
    }   
];

// var button_downsize = function{
//     var button = image-btn;
//     button.style.height = '100px';
//     return button
// }

// let ranks = [1, 5, 7, 8, 10, 7];
// let index = ranks.findIndex(rank => rank === 7);
// console.log(index);


// let ranks = [1, 5, 7, 8, 10, 7];

// let index = ranks.findIndex(
//     (rank, index) => rank === 7 && index > 2
// );

// console.log(index);
