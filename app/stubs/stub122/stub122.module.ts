import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub122Component} from "./stub122.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub122Component
        }])
    ],
    declarations: [
        Stub122Component
    ]
})
export class Stub122Module {

}
