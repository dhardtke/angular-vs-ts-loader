import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub690Component} from "./stub690.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub690Component
        }])
    ],
    declarations: [
        Stub690Component
    ]
})
export class Stub690Module {

}
