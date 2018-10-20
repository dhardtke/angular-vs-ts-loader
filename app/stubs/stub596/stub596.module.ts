import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub596Component} from "./stub596.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub596Component
        }])
    ],
    declarations: [
        Stub596Component
    ]
})
export class Stub596Module {

}
