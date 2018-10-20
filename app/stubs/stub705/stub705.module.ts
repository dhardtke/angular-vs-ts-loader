import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub705Component} from "./stub705.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub705Component
        }])
    ],
    declarations: [
        Stub705Component
    ]
})
export class Stub705Module {

}
