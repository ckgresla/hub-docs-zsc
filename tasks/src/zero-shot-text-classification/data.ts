import type { TaskDataCustom } from "../Types";

const taskData: TaskDataCustom = {
	datasets: [
		{
			// TODO write proper description
			description: "Zero Shot Classification is the task of providing a large language model with a specific prompt requesting it to output a label or sequence of text that effectively answers or classifies the input",
			id: "",
		},
	],
	demo: {
		inputs: [],
		outputs: [],
	},
	metrics: [
		{
			description:
				"",
			id: "",
		},
	],
	models: [
		{
			description:
				"Great example of a pre-trained LLM for use in zero-shot text classification tasks, see the original paper- ",
			id: "facebook/bart-large-mnli6",
		},
	],
	summary:
		"Zero shot text classification is the task of generating specific outputs (labels or coaxed sequences) from large, pre-trained, language models",
	widgetModels: ["facebook/bart-large-mnli"],
	youtubeId: "",
};

export default taskData;
