import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub239Component} from "./stub239.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub239Component
        }])
    ],
    declarations: [
        Stub239Component
    ]
})
export class Stub239Module {

}
