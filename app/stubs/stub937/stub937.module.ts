import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub937Component} from "./stub937.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub937Component
        }])
    ],
    declarations: [
        Stub937Component
    ]
})
export class Stub937Module {

}
