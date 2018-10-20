import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub811Component} from "./stub811.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub811Component
        }])
    ],
    declarations: [
        Stub811Component
    ]
})
export class Stub811Module {

}
