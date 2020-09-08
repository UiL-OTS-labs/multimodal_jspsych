# multimodal_jspsych
Multimodal web experiment made with jsPsych 6.1

Starting from the examples in the (jsPsych)[https://github.com/jspsych/moving-research-online-workshop], let's build a web experiment

output example as of now:

		"rt": null,
		"stimulus": "_video/yi4h.mp4",
		"key_press": null,
		"target_audio": "_audio/_b3s.wav",
		"target_video": "_video/yi4h.mp4",
		"target_image": "_image/_b3i.png",
		"condition": "Emotional Tone 4",
		"trial_part": "single_target_learn",
		"task_part": "test_learn_nine",
		"trial_type": "video-keyboard-response",
		"trial_index": 1,
		"time_elapsed": 6564,
		"internal_node_id": "0.0-1.0-0.0",
		"subject": "t9m8zkbxl",
		"emotion_condition": "emotional"


	{
		"rt": 1946.0400000098161,
		"stimulus": "_audio/beep.mp3",
		"button_pressed": "3",
		"new_correct_index": 4,
		"target_audio": "_audio/_b3s.wav",
		"target_image": "_image/_b3i.png",
		"condition": "Emotional Tone 4",
		"trial_part": "nine_target_choose_neutral",
		"task_part": "test_learn_nine",
		"target": "_b3",
		"trial_type": "audio-button-response-random",
		"trial_index": 2,
		"time_elapsed": 8518,
		"internal_node_id": "0.0-1.0-1.0",
		"subject": "t9m8zkbxl",
		"emotion_condition": "emotional",
		"accuracy": false
	},


some things are stilla bit weird, but well...carry on

(TIMESTAMP(14)	YYYYMMDDHHMMSS))

booleans? 
https://stackoverflow.com/questions/289727/which-mysql-data-type-to-use-for-storing-boolean-values

So let's just start with these MySQL/Mariadb tables/types:


NAME                     | Type (general)         | MySQL type
-------------------------|------------------------|-----------------
rt 	      	             | float                  | DECIMAL
stimulus                 | string                 | VARCHAR
button_pressed           | integer/string/???     | CHAR(1) / tinyint? JS: "1"
new_correct_index        | integer                | TINYINT
target_audio             | string                 | VARCHAR
target_image             | string                 | VARCHAR
condition                | string                 | VARCHAR
trial_part               | string                 | VARCHAR
task_part                | sting                  | VARCHAR
target                   | string                 | VARCHAR
trial_type               | string                 | VARCHAR
trial_index              | integer                | TINYINT 
time_elapsed             | integer (ms?)          | INTEGER
internal_node_id         | string                 | VARCHAR
subject                  | string                 | VARCHAR
emotional_condition      | string                 | VARCHAR
accuracy                 | boolean                | BOOL (tinyint)

(I suspcect we may want to also store timestamp formats, browser info etc? )



