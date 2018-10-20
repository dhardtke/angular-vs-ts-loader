import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub647Component} from "./stub647.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub647Component
        }])
    ],
    declarations: [
        Stub647Component
    ]
})
export class Stub647Module {

}
