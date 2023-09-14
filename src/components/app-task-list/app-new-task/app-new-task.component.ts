import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class AddTaskComponent extends Vue {
  id: string = "";
  description: string = "";

  addNewTask() {
    this.$store.dispatch("addTask", {
      id: this.id,
      description: this.description,
    });
    this.id = "";
    this.description = "";
  }
}
