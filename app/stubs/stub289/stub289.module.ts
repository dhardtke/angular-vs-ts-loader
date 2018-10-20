import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub289Component} from "./stub289.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub289Component
        }])
    ],
    declarations: [
        Stub289Component
    ]
})
export class Stub289Module {

}
