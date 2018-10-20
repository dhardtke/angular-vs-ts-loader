import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub821Component} from "./stub821.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub821Component
        }])
    ],
    declarations: [
        Stub821Component
    ]
})
export class Stub821Module {

}
