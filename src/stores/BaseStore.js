/**
 * Created by htm on 4/26/15.
 */
import {EventEmitter} from 'events';
import AppDispatcher from '../dispatchers/AppDispatcher'

export default class BaseStore extends EventEmitter {
	constructor(actionSubscribe) {
		this._dispatchToken = AppDispatcher.register(actionSubscribe);
	}

	get dispathToken(){
		return this._dispatchToken
	}

	emitChange() {
		this.emit('CHANGE');
	}

	addChangeListener(cb){
		this.on('CHANGE', cb);
	}

	removeChangeListener(cb) {
		this.removeListener('CHANGE', cb);
	}
}