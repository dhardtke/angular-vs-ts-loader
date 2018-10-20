import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub198Component} from "./stub198.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub198Component
        }])
    ],
    declarations: [
        Stub198Component
    ]
})
export class Stub198Module {

}
