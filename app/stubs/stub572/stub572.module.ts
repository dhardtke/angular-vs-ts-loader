import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub572Component} from "./stub572.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub572Component
        }])
    ],
    declarations: [
        Stub572Component
    ]
})
export class Stub572Module {

}
