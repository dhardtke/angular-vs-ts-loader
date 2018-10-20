import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub506Component} from "./stub506.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub506Component
        }])
    ],
    declarations: [
        Stub506Component
    ]
})
export class Stub506Module {

}
