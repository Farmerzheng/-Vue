import {playMode} from "../assets/js/config.js"
const state = {
	singer:{},
	fullScreen:false,
	playing:false,
	playlist:[],
	sequenceList:[],
	mode:playMode.sequence,
	currentIndex:-1
}
export default state