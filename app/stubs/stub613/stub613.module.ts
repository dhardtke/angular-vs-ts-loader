import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub613Component} from "./stub613.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub613Component
        }])
    ],
    declarations: [
        Stub613Component
    ]
})
export class Stub613Module {

}
