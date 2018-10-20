import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub907Component} from "./stub907.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub907Component
        }])
    ],
    declarations: [
        Stub907Component
    ]
})
export class Stub907Module {

}
