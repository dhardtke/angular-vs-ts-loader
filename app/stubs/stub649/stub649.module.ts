import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub649Component} from "./stub649.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub649Component
        }])
    ],
    declarations: [
        Stub649Component
    ]
})
export class Stub649Module {

}
