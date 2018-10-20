import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub616Component} from "./stub616.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub616Component
        }])
    ],
    declarations: [
        Stub616Component
    ]
})
export class Stub616Module {

}
